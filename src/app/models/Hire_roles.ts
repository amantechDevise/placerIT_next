import mongoose from "mongoose";

const HireRoleSchema = new mongoose.Schema(
  {
     It_role_id: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "It_Role", 
      required: true 
    },
    first_name: { type: String, required: true, default: "" },
    last_name: { type: String, required: true, default: "" },
    phone: { type: Number, required: true, default: 0 },
    email: { type: String, required: true, default: "" },
    just_confirm: { 
      type: Number, 
      required: true, 
      default: 0, 
      enum: [0, 1], // 0 => Employer, 1 => Looking for a job
    },
    company_name: { type: String, default: "" },
    job_title: { type: String,  default: "" },
    type_of_hire: { type: Number, default: 0 },
    number_of_job: { type: Number,  default: 0 },
    help: { type: String, default: null },
    image: { type: String,  default: "" },
    position: { type: Number,  default: 0 },
    status: { type: Number,  default: 0 },
  },
  { timestamps: true }
);

export const Hire_roles =
  mongoose.models.Hire_roles || mongoose.model("Hire_roles", HireRoleSchema);
