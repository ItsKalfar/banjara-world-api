import { Schema, Document, model } from 'mongoose';

interface OffersDocument extends Document {
  code: string;
  discount: number;
  validFrom: Date;
  validTo: Date;
  active: number;
}

const OffersSchema: Schema<OffersDocument> = new Schema({
  code: { type: String, required: true, unique: true },
  discount: { type: Number, required: true },
  validFrom: { type: Date, required: true },
  validTo: { type: Date, required: true },
  active: { type: Number, default: 1 }
});

export const Offers = model<OffersDocument>('Offers', OffersSchema);
