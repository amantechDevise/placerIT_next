import mongoose from "mongoose";
const AboutSchema = new mongoose.Schema(
  {
     name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    subject: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

export const About = mongoose.models.About || mongoose.model("About", AboutSchema);