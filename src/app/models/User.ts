import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

// Hash the password before saving it to the database
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare hashed password with the plain password
UserSchema.methods.matchPassword = async function (password: string) {
  console.log(this.password);
  return await bcrypt.compare(password, this.password);
   
};

export const User = mongoose.models.User || mongoose.model("User", UserSchema);
