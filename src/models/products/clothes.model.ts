import { Schema } from 'mongoose';
import { ProductDocument, Product } from './products.model';

interface ClotheDocument extends ProductDocument {
  size: string;
  color: string;
  material: string;
  style: string;
  gender: string;
  brand: string;
}

const ClotheSchema: Schema<ClotheDocument> = new Schema({
  size: { type: String, required: true },
  color: { type: String, required: true },
  material: { type: String, required: true },
  style: { type: String, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Unisex'], required: true },
  brand: { type: String }
});

export const Clothe = Product.discriminator<ClotheDocument>('Clothe', ClotheSchema);
