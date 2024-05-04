import mongoose, { Schema, Document } from 'mongoose';

interface ShippingDocument extends Document {
  orderId: typeof Schema.ObjectId;
  address: string;
  shippingDate: Date;
  status: string;
  trackingNumber?: string;
}

const ShippingSchema: Schema<ShippingDocument> = new Schema({
  orderId: { type: Schema.ObjectId, ref: 'Order', required: true },
  address: { type: String, required: true },
  shippingDate: { type: Date, required: true },
  status: { type: String, required: true },
  trackingNumber: { type: String }
});

export const Shipping = mongoose.model<ShippingDocument>('Shipping', ShippingSchema);
