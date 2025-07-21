import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/mongoose";
import { Hire_roles } from "@/app/models/Hire_roles";
import path from 'path';
import { promises as fs } from 'fs';

export const config = {
  api: {
    bodyParser: false, 
  },
};

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();

    // Get form data
    const formData = await req.formData();

    let imagePath = '';
    const imageFile = formData.get('image') as File | null;
    
    if (imageFile && imageFile.size > 0) {
      const bytes = await imageFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      
      const uploadDir = path.join(process.cwd(), 'public', 'uploads');
      await fs.mkdir(uploadDir, { recursive: true });
      
      const newFilename = `${Date.now()}-${imageFile.name}`;
      const newPath = path.join(uploadDir, newFilename);
      
      await fs.writeFile(newPath, buffer);
      imagePath = `/uploads/${newFilename}`;
    }

    const newHireRole = new Hire_roles({
      It_role_id: formData.get('It_role_id') as string,
      first_name: formData.get('first_name') as string || "",
      last_name: formData.get('last_name') as string || "",
      phone: Number(formData.get('phone')) || 0,
      email: formData.get('email') as string || "",
      just_confirm: Number(formData.get('just_confirm')) || 0,
      company_name: formData.get('company_name') as string || "",
      job_title: formData.get('job_title') as string || "",
      type_of_hire: Number(formData.get('type_of_hire')) || 0,
      number_of_job: Number(formData.get('number_of_job')) || 0,
      help: formData.get('help') as string || null,
      image: imagePath,
      position: Number(formData.get('position')) || 0,
      status: Number(formData.get('status')) || 0,
    });

    await newHireRole.save();

    return NextResponse.json({ data: newHireRole }, { status: 201 });
  } catch (error) {
    console.error("Error creating Hire_role:", error);
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Keep your existing GET and DELETE methods
export async function GET() {
  try {
    await connectToDatabase();
    const allHireRoles = await Hire_roles.find().populate("It_role_id", "name");
    return NextResponse.json({ data: allHireRoles }, { status: 200 });
  } catch (error) {
    console.error("Error fetching Hire_roles:", error);
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
    const deleted = await Hire_roles.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json({ message: "Hire_role not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Hire_role deleted", deleted }, { status: 200 });
  } catch (error) {
    console.error("Error deleting Hire_role:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}