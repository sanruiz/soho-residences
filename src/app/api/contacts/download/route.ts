import { NextRequest, NextResponse } from "next/server";
import { list } from "@vercel/blob";

const ADMIN_TOKEN = process.env.ADMIN_TOKEN || "soho-admin-2025";
const BLOB_FILENAME = "contacts.csv";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");

  // Validate token
  if (token !== ADMIN_TOKEN) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Find the CSV blob
    const { blobs } = await list({ prefix: BLOB_FILENAME });

    if (blobs.length === 0) {
      return NextResponse.json(
        { error: "No contacts file found" },
        { status: 404 }
      );
    }

    // Fetch the content from the blob URL
    const blobResponse = await fetch(blobs[0].url);
    const csvContent = await blobResponse.text();

    const response = new NextResponse(csvContent, {
      status: 200,
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": `attachment; filename="soho-contacts-${
          new Date().toISOString().split("T")[0]
        }.csv"`,
      },
    });

    return response;
  } catch {
    return NextResponse.json(
      { error: "No contacts file found" },
      { status: 404 }
    );
  }
}
