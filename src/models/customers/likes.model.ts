import { Schema, Document, model } from "mongoose";

interface LikesDocument extends Document {
  profile: any; 
}

// Define schema for Likes
const LikesSchema: Schema<LikesDocument> = new Schema({
  profile: { type: Schema.ObjectId, ref: "MatrimonialProfile", required: true },
});

export const Likes = model<LikesDocument>("Likes", LikesSchema);
