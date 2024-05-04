import { Schema, Document, model } from "mongoose";

interface SellerDocument extends Document {
  username: string;
  email: string;
  password: string;
  companyName: string;
  address: string;
  contactNumber: string;
  active: Number;
}

const SellerSchema: Schema<SellerDocument> = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  companyName: { type: String, required: true },
  address: { type: String, required: true },
  contactNumber: { type: String, required: true },
  active: {
    type: Number,
    default: 1,
  },
});

export const Seller = model<SellerDocument>("Seller", SellerSchema);
