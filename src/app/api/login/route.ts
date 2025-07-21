import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/mongoose";
import { User } from "@/app/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
    }

    await connectToDatabase();

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 400 });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 400 });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, { expiresIn: "1h" });

    const response = NextResponse.json({ email: user.email, message: "Login successful" });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60, // 1 hour in 
      path: "/",
      sameSite: "strict",
    });

    return response;

  } catch (error) {
    console.error("Error during login:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
