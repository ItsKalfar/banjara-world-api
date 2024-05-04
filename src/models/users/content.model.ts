import { Schema, Document, model } from "mongoose";

interface ContentDocument extends Document {
  section: string;
  heading?: string;
  image?: string;
}

const ContentSchema: Schema<ContentDocument> = new Schema({
  section: { type: String, required: true },
  heading: String,
  image: String,
});

export const Content = model("Content", ContentSchema);
