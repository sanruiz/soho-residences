"use server";

import { promises as fs } from "fs";
import path from "path";

interface ContactFormData {
  isSohoMember: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  bedrooms: string;
  isRealEstateAgent: string;
  howDidYouHear: string;
  submittedAt: string;
}

const CSV_FILE_PATH = path.join(process.cwd(), "data", "contacts.csv");

const CSV_HEADERS = [
  "Submitted At",
  "Full Name",
  "Email",
  "Phone Number",
  "Soho Member",
  "Bedrooms",
  "Real Estate Agent",
  "How Did You Hear",
];

async function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), "data");
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

async function ensureCsvFile() {
  await ensureDataDirectory();
  try {
    await fs.access(CSV_FILE_PATH);
  } catch {
    // Create file with headers if it doesn't exist
    await fs.writeFile(CSV_FILE_PATH, CSV_HEADERS.join(",") + "\n");
  }
}

function escapeCSV(value: string): string {
  if (value.includes(",") || value.includes('"') || value.includes("\n")) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

export async function submitContactForm(formData: FormData) {
  try {
    const data: ContactFormData = {
      isSohoMember: (formData.get("member") as string) || "No",
      fullName: (formData.get("fullName") as string) || "",
      phoneNumber: (formData.get("phoneNumber") as string) || "",
      email: (formData.get("email") as string) || "",
      bedrooms: (formData.get("bedrooms") as string) || "2",
      isRealEstateAgent: (formData.get("agent") as string) || "No",
      howDidYouHear: (formData.get("howDidYouHear") as string) || "Soho House",
      submittedAt: new Date().toISOString(),
    };

    // Validate required fields
    if (!data.fullName || !data.email || !data.phoneNumber) {
      return { success: false, error: "Please fill in all required fields" };
    }

    await ensureCsvFile();

    const csvRow = [
      escapeCSV(data.submittedAt),
      escapeCSV(data.fullName),
      escapeCSV(data.email),
      escapeCSV(data.phoneNumber),
      escapeCSV(data.isSohoMember),
      escapeCSV(data.bedrooms),
      escapeCSV(data.isRealEstateAgent),
      escapeCSV(data.howDidYouHear),
    ].join(",") + "\n";

    await fs.appendFile(CSV_FILE_PATH, csvRow);

    return { success: true, message: "Thank you! We will be in touch soon." };
  } catch (error) {
    console.error("Error saving contact:", error);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}
