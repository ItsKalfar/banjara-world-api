import mongoose, { Schema, Document } from 'mongoose';

interface WishlistDocument extends Document {
  customer: typeof Schema.ObjectId;
  products: typeof Schema.ObjectId[];
}

const WishlistSchema: Schema<WishlistDocument> = new Schema({
  customer: { type: Schema.Types.ObjectId, ref: 'Customer', required: true },
  products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
});

// Create and export Wishlist model
const Wishlist = mongoose.model<WishlistDocument>('Wishlist', WishlistSchema);
export default Wishlist;
