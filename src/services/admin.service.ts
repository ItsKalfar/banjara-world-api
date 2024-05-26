// reset password, forgot password, upload images, sign up

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
import { AdminModel } from "../models/admin.model";
import { CustomerModel } from "../models/customer.model";
import { SellerModel } from "../models/seller.model";
import { isEmpty, isUndefined } from "lodash";

const getAllAdmins = async (reqData: any) => {
  try {
    let SearchQuery = !isEmpty(reqData.search)
      ? `WHERE (name LIKE '%${reqData.search}' OR email LIKE '%${reqData.search}')`
      : ``;
    let countData = await new AdminModel().getAdminsCount(SearchQuery);
    let pagination = !isUndefined(reqData.setpagination)
      ? reqData.setpagination
      : false;
    let OrderQuery =
      !isEmpty(reqData.orderBy) && reqData.orderBy.key !== ""
        ? ` ORDER BY ${reqData.orderBy.key} ${reqData.orderBy.order}`
        : `ORDER BY id ASC`;

    const data = await new AdminModel().getAllAdmins(
      SearchQuery,
      OrderQuery,
      pagination ? countData.length : reqData.pageSize,
      (reqData.pageIndex - 1) * reqData.pageSize
    );
    return { data: data, count: isEmpty(countData) ? 0 : countData.length };
  } catch (err: any) {
    throw err;
  }
};

const signIn = async (reqData: any) => {
  try {
    const checkStatus = await new AdminModel().getAdminByEmail(
      reqData.email.trim()
    );

    if (checkStatus === 0)
      throw new Error(
        "User not found. Please check your email address and try again."
      );
    if (checkStatus[0].status === 0)
      throw new Error(
        "Your Email id is disabled. Kindly contact admin for more queries."
      );

    checkStatus[0].password = checkStatus[0].password.replace(/^\$2y/, "$2a");

    let generatedHash = await verifyPassword(
      reqData.password,
      checkStatus[0].password
    );

    if (generatedHash === false)
      throw new Error("Incorrect password. Please try again.");

    delete checkStatus[0].password;
    const token = jwt.sign(
      { user_id: checkStatus[0].id },
      appConfig.JwtToken.secretKey
    );
    return { user: checkStatus[0], token: token };
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

const addAdmin = async (reqData: any) => {
  try {
    const checkStatus = await new AdminModel().getAdminByEmail(
      reqData.email.trim()
    );

    if (checkStatus.length > 0) throw new Error("Admin already exists!");

    const AdminInfo: any = {
      name: reqData.name.trim(),
      email: reqData.email.trim(),
      profile_picture: reqData.profile_picture,
    };

    const insertionStatus = await new AdminModel().addAdmin(AdminInfo);
    reqData.adminId = insertionStatus.insertId;
    return { data: reqData };
  } catch (err: any) {
    throw err;
  }
};

const updateAdmin = async (reqData: any) => {
  try {
    const checkStatus = await new AdminModel().getAdminById(reqData.adminId);
    if (checkStatus.length === 0) throw new Error("Admin doesn't exists");

    let AdminInfo: any = {};

    if (!isEmpty(reqData.name)) AdminInfo.name = reqData.name.trim();
    if (!isEmpty(reqData.email)) AdminInfo.email = reqData.email.trim();
    if (!isEmpty(reqData.profile_picture))
      AdminInfo.profile_picture = reqData.profile_picture;
    if (!isUndefined(reqData.status)) AdminInfo.status = reqData.status;

    await new AdminModel().updateAdmin(AdminInfo, reqData.adminId);
    return { data: reqData };
  } catch (err: any) {
    throw err;
  }
};

const deleteAdmin = async (reqData: any) => {
  try {
    const checkStatus = await new AdminModel().getAdminById(reqData.adminId);
    if (checkStatus.length === 0) throw new Error("Admin doesn't exists");

    let AdminInfo: any = {
      status: 0,
    };
    await new AdminModel().updateAdmin(AdminInfo, reqData.adminId);
    return { data: reqData };
  } catch (err: any) {
    throw err;
  }
};

const getSingleAdminDetails = async (reqData: any) => {
  try {
    const data = await new AdminModel().getAdminById(reqData.adminId);
    if (data.length === 0) throw new Error("Admin doesn't exists");

    return { data };
  } catch (err: any) {
    throw err;
  }
};

const getAllCustomers = async (reqData: any) => {
  try {
    let SearchQuery = !isEmpty(reqData.search)
      ? `WHERE (name LIKE '%${reqData.search}' OR email LIKE '%${reqData.search}' OR mobile_number LIKE '%${reqData.search}')`
      : ``;
    let countData = await new CustomerModel().getAllCustomersCount(SearchQuery);
    let pagination = !isUndefined(reqData.setpagination)
      ? reqData.setpagination
      : false;
    let OrderQuery =
      !isEmpty(reqData.orderBy) && reqData.orderBy.key !== ""
        ? `ORDER BY ${reqData.orderBy.key} ${reqData.orderBy.order}`
        : `ORDER BY id ASC`;

    const data = await new CustomerModel().getAllCustomers(
      SearchQuery,
      OrderQuery,
      pagination ? countData.length : reqData.pageSize,
      (reqData.pageIndex - 1) * reqData.pageSize
    );

    return { data };
  } catch (err: any) {
    throw err;
  }
};

const getSingleCustomer = async (reqData: any) => {
  try {
    const data = await new CustomerModel().getCustomerById(reqData.customerId);

    if (data.length === 0) throw new Error("Customer doesn't exists");

    return { data };
  } catch (err: any) {
    throw err;
  }
};

const getAllSellers = async (reqData: any) => {
  try {
    let SearchQuery = !isEmpty(reqData.search)
      ? `WHERE (name LIKE '%${reqData.search}' OR email LIKE '%${reqData.search}' OR store_name LIKE '%${reqData.search}')`
      : ``;
    let countData = await new SellerModel().getAllAdminSellersCount(
      SearchQuery
    );
    let pagination = !isUndefined(reqData.setpagination)
      ? reqData.setpagination
      : false;
    let OrderQuery =
      !isEmpty(reqData.orderBy) && reqData.orderBy.key !== ""
        ? `ORDER BY ${reqData.orderBy.key} ${reqData.orderBy.order}`
        : `ORDER BY id ASC`;

    const data = await new SellerModel().getAllAdminSellers(
      SearchQuery,
      OrderQuery,
      pagination ? countData.length : reqData.pageSize,
      (reqData.pageIndex - 1) * reqData.pageSize
    );

    return { data };
  } catch (err: any) {
    throw err;
  }
};

const getSingleSeller = async (reqData: any) => {
  try {
    const data = await new SellerModel().getSellerById(reqData.sellerId);

    if (data.length === 0) throw new Error("Seller doesn't exists");

    return { data };
  } catch (err: any) {
    throw err;
  }
};

export default {
  signIn,
  resetPassword,
  forgotPassword,
  getAllAdmins,
  addAdmin,
  updateAdmin,
  deleteAdmin,
  getSingleAdminDetails,
  getAllCustomers,
  getAllSellers,
  getSingleCustomer,
  getSingleSeller,
};
