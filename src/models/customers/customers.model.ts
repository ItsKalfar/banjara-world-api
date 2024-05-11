import { Schema, Document, model } from "mongoose";
import { hash, compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface CustomerDocument extends Document {
  fullname: string;
  mobile: string;
  password: string;
  addresses: string[];
  purchases: string[];
  matrimonialProfile?: string;
  role: string;
  profilePicture?: string;
  active: number;
  verifyMobile: boolean;
  forgotPasswordToken: string;
  forgotPasswordExpiry: any;
  createdAt: any;
}

const CustomerSchema: Schema<CustomerDocument> = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    verifyMobile: {
      type: Boolean,
      default: false
    },
    addresses: [{ type: String, required: true }],
    purchases: [{ type: Schema.ObjectId, ref: "Order" }],
    matrimonialProfile: {
      type: Schema.ObjectId,
      ref: "MatrimonialProfile",
    },
    profilePicture: String,
    role: {
      type: String,
      enum: ["ADMIN", "SELLER", "CUSTOMER"],
      default: "CUSTOMER",
    },
    active: {
      type: Number,
      default: 1,
    },
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,
  },
  { timestamps: true }
);

CustomerSchema.pre("save", async function (next): Promise<void> {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = await hash(this.password, 10);
});

CustomerSchema.methods.isPasswordCorrect = async function (password: string) {
  return await compare(password, this.password);
};

CustomerSchema.methods.generateAccessToken = function () {
  return sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
      role: this.role,
    },
    process.env.ACCESS_TOKEN_SECRET as string,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
  );
};

CustomerSchema.methods.generateRefreshToken = function () {
  return sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET as string,
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
  );
};

export const Customer = model("Customer", CustomerSchema);
