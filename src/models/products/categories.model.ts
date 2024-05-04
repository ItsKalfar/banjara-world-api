import { Schema, Document, model } from "mongoose";

interface CategoryDocument extends Document {
  name: string;
  image: string;
  active: number;
}

const CategorySchema: Schema<CategoryDocument> = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  active: { type: Number, default: 1 },
});

export const Review = model<CategoryDocument>("Category", CategorySchema);