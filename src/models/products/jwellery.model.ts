import { Schema } from 'mongoose';
import { ProductDocument, Product } from './products.model';

interface JewelryDocument extends ProductDocument {
  type: string;
  metalType: string;
  gemstone?: string;
  size?: string;
  brand: string;
}

const JewelrySchema: Schema<JewelryDocument> = new Schema({
  type: { type: String, required: true },
  metalType: { type: String, required: true },
  gemstone: { type: String },
  size: { type: String },
  brand: { type: String }
});

export const Jewelry = Product.discriminator<JewelryDocument>('Jewelry', JewelrySchema);
