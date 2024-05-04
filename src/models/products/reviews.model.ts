import { Schema, Document, model } from "mongoose";

interface ReviewDocument extends Document {
  customer: typeof Schema.ObjectId;
  product: typeof Schema.ObjectId;
  rating: number;
  comment: string;
}

const ReviewSchema: Schema<ReviewDocument> = new Schema({
  customer: { type: Schema.ObjectId, ref: "Customer", required: true },
  product: { type: Schema.ObjectId, ref: "Product", required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
});

export const Review = model<ReviewDocument>("Review", ReviewSchema);
