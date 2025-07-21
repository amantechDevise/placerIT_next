import mongoose from "mongoose";
const ITRoleSchema = new mongoose.Schema(
  {
     name: { type: String, required: true },
     status: { type: Boolean, required: true ,default:true},
  },
  { timestamps: true }
);

export const It_Role = mongoose.models.It_Role || mongoose.model("It_Role", ITRoleSchema);
