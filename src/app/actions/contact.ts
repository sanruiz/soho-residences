"use server";

import { put, list } from "@vercel/blob";

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

const BLOB_FILENAME = "contacts.csv";

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

function escapeCSV(value: string): string {
  if (value.includes(",") || value.includes('"') || value.includes("\n")) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

async function getExistingCsvContent(): Promise<string> {
  try {
    // List blobs to find our CSV file
    const { blobs } = await list({ prefix: BLOB_FILENAME });

    if (blobs.length > 0) {
      // Fetch the existing content
      const response = await fetch(blobs[0].url);
      if (response.ok) {
        return await response.text();
      }
    }
  } catch {
    console.log("No existing CSV found, creating new one");
  }

  // Return headers if no existing file
  return CSV_HEADERS.join(",") + "\n";
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

    // Get existing CSV content
    const existingContent = await getExistingCsvContent();

    const csvRow =
      [
        escapeCSV(data.submittedAt),
        escapeCSV(data.fullName),
        escapeCSV(data.email),
        escapeCSV(data.phoneNumber),
        escapeCSV(data.isSohoMember),
        escapeCSV(data.bedrooms),
        escapeCSV(data.isRealEstateAgent),
        escapeCSV(data.howDidYouHear),
      ].join(",") + "\n";

    // Append new row to existing content and upload
    const newContent = existingContent + csvRow;

    await put(BLOB_FILENAME, newContent, {
      access: "public",
      addRandomSuffix: false,
      allowOverwrite: true,
    });

    return { success: true, message: "Thank you! We will be in touch soon." };
  } catch (error) {
    console.error("Error saving contact:", error);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}
