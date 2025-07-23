import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/mongoose";
import { Contact } from "@/app/models/Contact";

export async function POST(req: NextRequest) {
  try {
    const { email, name,phone,message } = await req.json();

   
    await connectToDatabase();

    const newUser = new Contact({ email,name,phone,message });
    await newUser.save();

    return NextResponse.json({ newUser: newUser }, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
 
}

 export async function GET() {
    try {
      await connectToDatabase();
  
      const allContect = await Contact.find();
  
      return NextResponse.json({ data: allContect }, { status: 200 });
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
      const deleted = await Contact.findByIdAndDelete(id);
  
      if (!deleted) {
        return NextResponse.json({ message: "Contact not found" }, { status: 404 });
      }
  
      return NextResponse.json({ message: "Contact deleted", deleted }, { status: 200 });
    } catch (error) {
      console.error("Error deleting contact request:", error);
      return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
  }