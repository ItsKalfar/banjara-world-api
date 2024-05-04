import { Schema, Document, model } from "mongoose";
import validator from "validator";
import { hash, compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface UserDocument extends Document {
  username: string;
  email: string;
  password: string;
  role: string;
  profilePicture?: string;
  active: number;
  forgotPasswordToken: string;
  forgotPasswordExpiry: any;
  createdAt: any;
}

const UserSchema: Schema<UserDocument> = new Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
    minlength: [3, "Name should contain at least 3 characters"],
    maxlength: [40, "Name should be under 40 characters"],
  },
  email: {
    type: String,
    required: [true, "Please prvide your email"],
    validate: [validator.isEmail, "Please enter valid email address"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: [8, "Password shouild be atleast 8 charcters"],
    select: false,
  },
  profilePicture: String,
  role: {
    type: String,
    enum: ["ADMIN", "SELLER", "CUSTOMER"],
    default: "ADMIN",
  },
  active: {
    type: Number,
    default: 1,
  },
  forgotPasswordToken: String,
  forgotPasswordExpiry: Date,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

UserSchema.pre("save", async function (next): Promise<void> {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = await hash(this.password, 10);
});

UserSchema.methods.isPasswordCorrect = async function (password: string) {
  return await compare(password, this.password);
};

UserSchema.methods.generateAccessToken = function () {
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

UserSchema.methods.generateRefreshToken = function () {
  return sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET as string,
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
  );
};

export const User = model("User", UserSchema);
