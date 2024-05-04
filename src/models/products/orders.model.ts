import { Schema, Document, model } from 'mongoose';

interface OrderDocument extends Document {
  customer: any; // Reference to User model
  products: {
    product: string;
    quantity: number;
    price: number;
  }[];
  totalAmount: number;
  status: string;
  shippingAddress: string;
  paymentMethod: string;
  active: Number;
}

const OrderSchema: Schema<OrderDocument> = new Schema({
  customer: { type: Schema.ObjectId, ref: 'Customer', required: true },
  products: [{
    product: { type: Schema.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }
  }],
  totalAmount: { type: Number, required: true },
  status: { type: String, required: true },
  shippingAddress: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  active: { type: String, default: 1 }
});

export const Order = model<OrderDocument>('Order', OrderSchema);
