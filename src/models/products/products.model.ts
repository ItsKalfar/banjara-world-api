import { Schema, Document, model } from "mongoose";

export interface ProductDocument extends Document {
  name: string;
  description: string;
  price: number;
  category: string;
  brand: string;
  noOfReviews: number;
  images: string[];
  stockQuantity: number;
  ratings: number[];
  reviews: string[];
  seller: any;
  active: number;
}

const ProductSchema: Schema<ProductDocument> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      enum: ["book", "clothe", "jewellery"],
      required: true,
    },
    images: [
      {
        type: String,
        required: true,
      },
    ],
    stockQuantity: {
      type: Number,
      required: true,
    },
    ratings: [
      {
        type: Number,
        default: 0,
      },
    ],
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    noOfReviews: {
      type: Number,
      required: true,
    },
    seller: {
      type: Schema.Types.ObjectId,
      ref: "Seller",
      required: true,
    },
    active: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

export const Product = model<ProductDocument>("Product", ProductSchema);
