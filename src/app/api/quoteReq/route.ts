import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/mongoose";
import { QuoteReq } from "@/app/models/QuoteReq";

// ✅ POST: Create a new quote request
export async function POST(req: NextRequest) {
  try {
    const { email, name, ServiceRequired } = await req.json();

    await connectToDatabase();

    const newUser = new QuoteReq({ email, name, ServiceRequired });
    await newUser.save();

    return NextResponse.json({ newUser }, { status: 201 });
  } catch (error) {
    console.error("Error creating quote request:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

// ✅ GET: Fetch all quote requests
export async function GET() {
  try {
    await connectToDatabase();

    const allQuotes = await QuoteReq.find();

    return NextResponse.json({ data: allQuotes }, { status: 200 });
  } catch (error) {
    console.error("Error fetching quote requests:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ message: "Missing ID" }, { status: 400 });
    }

    await connectToDatabase();
    const deleted = await QuoteReq.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json({ message: "Quote not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Quote deleted", deleted }, { status: 200 });
  } catch (error) {
    console.error("Error deleting quote request:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
