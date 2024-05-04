import { Schema } from "mongoose";
import { ProductDocument, Product } from "./products.model";

interface BookDocument extends ProductDocument {
  author: string;
  genre: string;
  publisher: string;
  isbn: string;
  publicationDate: Date;
  language: string;
  format: string;
}

const BookSchema: Schema<BookDocument> = new Schema({
  author: { type: String, required: true },
  genre: { type: String, required: true },
  publisher: { type: String, required: true },
  isbn: { type: String, required: true },
  publicationDate: { type: Date, required: true },
  language: { type: String, required: true },
  format: { type: String, required: true },
});

export const Book = Product.discriminator<BookDocument>("Book", BookSchema);
