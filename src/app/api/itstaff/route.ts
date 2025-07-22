
import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/mongoose";
import { It_Role } from "@/app/models/It_Roles";

export async function POST(req: NextRequest) {
  try {
    const { name, status } = await req.json();

    await connectToDatabase();

    const newUser = new It_Role({
      name,
      status: typeof status === "boolean" ? status : true,
    });

    await newUser.save();

    return NextResponse.json({ data: newUser }, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
 export async function GET() {
    try {
      await connectToDatabase();
  
      const allContect = await It_Role.find();
  
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
      const deleted = await It_Role.findByIdAndDelete(id);
  
      if (!deleted) {
        return NextResponse.json({ message: "Quote not found" }, { status: 404 });
      }
  
      return NextResponse.json({ message: "Quote deleted", deleted }, { status: 200 });
    } catch (error) {
      console.error("Error deleting quote request:", error);
      return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
  }
  export async function PATCH(req: NextRequest) {
  try {
    const { id, status } = await req.json();

    if (!id) {
      return NextResponse.json({ message: "Missing ID" }, { status: 400 });
    }

    if (typeof status !== "boolean") {
      return NextResponse.json({ message: "Status must be boolean" }, { status: 400 });
    }

    await connectToDatabase();

    const updatedRole = await It_Role.findByIdAndUpdate(
      id,
      { status },
      { new: true }  // updated document return karega
    );

    if (!updatedRole) {
      return NextResponse.json({ message: "Role not found" }, { status: 404 });
    }

    return NextResponse.json({ data: updatedRole }, { status: 200 });
  } catch (error) {
    console.error("Error updating status:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
