import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const ADMIN_TOKEN = process.env.ADMIN_TOKEN || "soho-admin-2025";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");

  // Validate token
  if (token !== ADMIN_TOKEN) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const csvPath = path.join(process.cwd(), "data", "contacts.csv");

  try {
    const csvContent = await fs.readFile(csvPath, "utf-8");
    
    const response = new NextResponse(csvContent, {
      status: 200,
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": `attachment; filename="soho-contacts-${new Date().toISOString().split("T")[0]}.csv"`,
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
