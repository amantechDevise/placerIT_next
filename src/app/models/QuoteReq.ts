import mongoose from "mongoose";
const QuoteReqSchema = new mongoose.Schema(
  { 
     name: { type: String, required: true },
    email: { type: String, required: true,  },
    ServiceRequired: { type: Number, required: true,default: 0,enum: [0, 1,2,3,4,5,6,7] },// 0 => Software Consultancy, 1 => Website Development ,2=>QA / Testing ,3=>Digital Marketing, 4=>Blockchain Development ,5=>UI / UX Design ,6=>Others

  },
  { timestamps: true }
);
 
export const QuoteReq = mongoose.models.QuoteReq || mongoose.model("QuoteReq", QuoteReqSchema);
