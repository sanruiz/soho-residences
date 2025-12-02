import { redirect } from "next/navigation";
import { list } from "@vercel/blob";
import Link from "next/link";

// Token secreto para acceder a la página
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || "soho-admin-2025";
const BLOB_FILENAME = "contacts.csv";

interface Contact {
  submittedAt: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  sohoMember: string;
  bedrooms: string;
  realEstateAgent: string;
  howDidYouHear: string;
}

async function getContacts(): Promise<Contact[]> {
  try {
    // Find the CSV blob
    const { blobs } = await list({ prefix: BLOB_FILENAME });
    
    if (blobs.length === 0) {
      return [];
    }

    // Fetch the content from the blob URL
    const response = await fetch(blobs[0].url);
    const csvContent = await response.text();
    
    const lines = csvContent.trim().split("\n");
    
    // Skip header row
    if (lines.length <= 1) return [];
    
    return lines.slice(1).map((line) => {
      // Parse CSV line (handling quoted values)
      const values: string[] = [];
      let current = "";
      let inQuotes = false;
      
      for (const char of line) {
        if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === "," && !inQuotes) {
          values.push(current);
          current = "";
        } else {
          current += char;
        }
      }
      values.push(current);
      
      return {
        submittedAt: values[0] || "",
        fullName: values[1] || "",
        email: values[2] || "",
        phoneNumber: values[3] || "",
        sohoMember: values[4] || "",
        bedrooms: values[5] || "",
        realEstateAgent: values[6] || "",
        howDidYouHear: values[7] || "",
      };
    });
  } catch {
    return [];
  }
}

export default async function AdminContactsPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;
  
  // Validate token
  if (token !== ADMIN_TOKEN) {
    redirect("/");
  }
  
  const contacts = await getContacts();
  
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Contact Submissions</h1>
            <p className="text-gray-600 mt-1">{contacts.length} total contacts</p>
          </div>
          <div className="flex gap-3">
            <Link
              href={`/api/contacts/download?token=${token}`}
              className="px-4 py-2 bg-front-door-navy text-white rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Download CSV
            </Link>
            <Link
              href="/"
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Back to Site
            </Link>
          </div>
        </div>
        
        {/* Table */}
        {contacts.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <p className="text-gray-500 text-lg">No contacts yet</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Phone
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Soho Member
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Bedrooms
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Agent
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Source
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {contacts.map((contact, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(contact.submittedAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {contact.fullName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">
                          {contact.email}
                        </a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <a href={`tel:${contact.phoneNumber}`} className="text-blue-600 hover:underline">
                          {contact.phoneNumber}
                        </a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          contact.sohoMember === "Yes" 
                            ? "bg-green-100 text-green-800" 
                            : "bg-gray-100 text-gray-800"
                        }`}>
                          {contact.sohoMember}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {contact.bedrooms}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {contact.realEstateAgent}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {contact.howDidYouHear}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
