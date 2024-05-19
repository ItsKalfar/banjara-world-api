// sign in
// sign up
// send otp
// resend otp
// verify otp
// forgot password
// reset password
// update customer details
// get customer details
// add address
// deactivate account
// some change

import { generateHash, verifyPassword } from "../utilities/Hashing";
import jwt from "jsonwebtoken";
import { appConfig } from "../config/config";
import moment from "moment";
import formidable from "formidable";
import { transporter } from "../utilities/SendEmail";
import {
  uploadFilestreamToS3,
  FilestreamToS3,
} from "../utilities/BucketUtilities";
import { CustomerModel } from "../models/customer.model";

const signUp = async (reqData: any) => {
  try {
    const checkStatus = await new CustomerModel();
  } catch (err: any) {
    throw err;
  }
};

const signIn = async (reqData: any) => {
  try {
  } catch (err: any) {
    throw err;
  }
};

const resetPassword = async (reqData: any) => {
  try {
  } catch (err: any) {
    throw err;
  }
};

const forgotPassword = async (reqData: any) => {
  try {
  } catch (err: any) {
    throw err;
  }
};

const sendOtp = async (reqData: any) => {
  try {
  } catch (err: any) {
    throw err;
  }
};

const resendOtp = async (reqData: any) => {
  try {
  } catch (err: any) {
    throw err;
  }
};

const verifyOtp = async (reqData: any) => {
  try {
  } catch (err: any) {
    throw err;
  }
};

export default {
  signIn,
  signUp,
  sendOtp,
  verifyOtp,
  resendOtp,
  resetPassword,
};
