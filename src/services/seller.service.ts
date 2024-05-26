import { SellerModel } from "../models/seller.model";
import { isEmpty, isUndefined } from "lodash";
import jwt from "jsonwebtoken";
import { appConfig } from "../config/config";
import { generateHash, verifyPassword } from "../utilities/Hashing";

const signUp = async (reqData: any) => {
  try {
    if (isEmpty(reqData.email)) throw new Error("Please provide email address");
    if (isEmpty(reqData.mobileNumber))
      throw new Error("Please provide mobile number");

    const checkSellerByEmail = await new SellerModel().getSellerByEmail(
      reqData.email.trim()
    );

    if (checkSellerByEmail.length > 0)
      throw new Error("Email already exists. Please use another email id");

    const checkSellerByMobileNumber =
      await new SellerModel().getSellerByMobileNumber(reqData.mobileNumber);

    if (checkSellerByMobileNumber.length > 0)
      throw new Error(
        "Mobile number already exists. Please use another mobile number."
      );

    const hash_password = await generateHash(reqData.password.trim(), 10);

    let SellerInfo = {
      name: reqData.name.trim(),
      email: reqData.email.trim(),
      mobile_number: reqData.mobileNumber.trim(),
      password: hash_password,
      store_name: reqData.storeName.trim(),
      store_description: reqData.storeDescription,
      profile_picture: reqData.profilePicture,
    };

    const insertionStatus = await new SellerModel().addSeller(SellerInfo);
    const SellerId = insertionStatus.insertId;
    const token = jwt.sign(
      { seller_id: SellerId },
      appConfig.JwtToken.secretKey
    );
    return { data: reqData, token };
  } catch (err: any) {
    throw err;
  }
};

const signIn = async (reqData: any) => {
  try {
    const checkStatus = await new SellerModel().getSellerByEmail(
      reqData.email.trim()
    );

    if (checkStatus === 0)
      throw new Error(
        "Seller not found. Please check your email address and try again."
      );
    if (checkStatus[0].status === 0)
      throw new Error(
        "Seller not found. Please check your email address and try again."
      );

    checkStatus[0].password = checkStatus[0].password.replace(/^\$2y/, "$2a");

    let generatedHash = await verifyPassword(
      reqData.password.trim(),
      checkStatus[0].password
    );

    if (generatedHash === false)
      throw new Error("Incorrect password. Please try again.");

    delete checkStatus[0].password;

    const token = jwt.sign(
      { seller_id: checkStatus[0].id },
      appConfig.JwtToken.secretKey
    );

    return { seller: checkStatus[0], token: token };
  } catch (err: any) {
    throw err;
  }
};

const updateProfile = async (reqData: any) => {
  try {
    const checkStatus = await new SellerModel().getSellerById(reqData.sellerId);
    if (checkStatus.length === 0) throw new Error("Seller doesn't exists");

    let sellerInfo: any = {};

    if (!isEmpty(reqData.name)) sellerInfo.name = reqData.name.trim();
    if (!isEmpty(reqData.email)) sellerInfo.email = reqData.email.trim();
    if (!isEmpty(reqData.mobileNumber))
      sellerInfo.mobile_number = reqData.mobileNumber.trim();
    if (!isEmpty(reqData.storeName))
      sellerInfo.store_name = reqData.storeName.trim();
    if (!isEmpty(reqData.storeDescription))
      sellerInfo.store_description = reqData.storeDescription;
    if (!isEmpty(reqData.profilePicture))
      sellerInfo.profile_picture = reqData.profilePicture;
    if (!isUndefined(reqData.status)) sellerInfo.status = reqData.status;

    await new SellerModel().updateSeller(sellerInfo, reqData.sellerId);

    return { data: reqData };
  } catch (err: any) {
    throw err;
  }
};

const deleteProfile = async (reqData: any) => {
  try {
    const checkStatus = await new SellerModel().getSellerById(reqData.sellerId);
    if (checkStatus.length === 0) throw new Error("Seller doesn't exists");

    let sellerInfo: any = {
      status: 0,
    };

    await new SellerModel().updateSeller(sellerInfo, reqData.sellerId);

    return { data: reqData };
  } catch (err: any) {
    throw err;
  }
};

export default {
  signIn,
  signUp,
  updateProfile,
  deleteProfile,
};
