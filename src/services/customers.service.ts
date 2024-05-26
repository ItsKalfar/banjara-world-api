// sign in
// sign up
// send otp
// resend otp
// verify otp
// forgot password
// reset password
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
import { isEmpty, isUndefined } from "lodash";
import { AddressModel } from "../models/address.model";

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

const updateCustomerDetails = async (reqData: any) => {
  try {
    const checkStatus = await new CustomerModel().getCustomerById(
      reqData.customerId
    );

    if (checkStatus.length === 0) throw new Error("Customer doesn't exists");

    let CustomerInfo: any = {};

    if (!isEmpty(reqData.name)) CustomerInfo.name = reqData.name.trim();
    if (!isEmpty(reqData.email)) CustomerInfo.email = reqData.email.trim();
    if (!isEmpty(reqData.mobile_number))
      CustomerInfo.mobile_number = reqData.mobile_number.trim();
    if (!isEmpty(reqData.profile_picture))
      CustomerInfo.profile_picture = reqData.profile_picture;
    if (!isUndefined(reqData.status)) CustomerInfo.status = reqData.status;

    await new CustomerModel().updateCustomerData(
      CustomerInfo,
      reqData.customerId
    );

    return { data: reqData };
  } catch (err: any) {
    throw err;
  }
};

const getCustomerDetails = async (reqData: any) => {
  try {
    const data = await new CustomerModel().getCustomerById(reqData.customerId);

    if (data.length === 0) throw new Error("Customer doesn't exists");

    return { data };
  } catch (err: any) {
    throw err;
  }
};

const getAllAddressesOfCustomer = async (reqData: any) => {
  try {
    const checkCustomerStatus = await new CustomerModel().getCustomerById(
      reqData.customerId
    );
    if (checkCustomerStatus.length === 0)
      throw new Error("Customer doesn't exists");

    const SearchQuery = !isEmpty(reqData.search)
      ? `AND (
      address_line1 LIKE '%${reqData.search}%' OR
      address_line2 LIKE '%${reqData.search}%' OR
      city LIKE '%${reqData.search}%' OR
      state LIKE '%${reqData.search}%' OR
      country LIKE '%${reqData.search}%' OR
      postal_code LIKE '%${reqData.search}%'
    )
  `
      : ``;
    let orderQuery =
      !isEmpty(reqData.orderBy) && reqData.orderBy.key !== ""
        ? ` ORDER BY ${reqData.orderBy.key} ${reqData.orderBy.order}`
        : `ORDER BY id ASC`;
    let pagination = !isUndefined(reqData.setpagination)
      ? reqData.setpagination
      : false;

    let countData = await new AddressModel().getAllAddressesCount(
      reqData.customerId,
      SearchQuery
    );

    const data = await new AddressModel().getAllAddressesOfCustomer(
      SearchQuery,
      orderQuery,
      pagination ? countData.length : reqData.pageSize,
      (reqData.pageIndex - 1) * reqData.pageSize,
      reqData.customerId
    );
    return { data: data, count: isEmpty(countData) ? 0 : countData.length };
  } catch (err: any) {
    throw err;
  }
};

const addAddress = async (reqData: any) => {
  try {
    const checkCustomerStatus = await new CustomerModel().getCustomerById(
      reqData.customerId
    );
    if (checkCustomerStatus.length === 0)
      throw new Error("Customer doesn't exists");

    const checkAddressStatus =
      await new AddressModel().getCustomerAddressesByCustomerId(
        reqData.customerId
      );

    let AddressInfo = {
      customer_id: reqData.customerId,
      address_line1: reqData.address_line1.trim(),
      address_line2: reqData.address_line2.trim(),
      city: reqData.city.trim(),
      state: reqData.state.trim(),
      postal_code: reqData.postal_code.trim(),
      country: reqData.country.trim(),
      is_default: checkAddressStatus.length > 0 ? 0 : 1,
    };

    const insertionStatus = await new AddressModel().addNewAddress(AddressInfo);
    reqData.addressId = insertionStatus.insertId;

    return { data: reqData };
  } catch (err: any) {
    throw err;
  }
};

const updateAddress = async (reqData: any) => {
  try {
    const checkCustomerStatus = await new CustomerModel().getCustomerById(
      reqData.customerId
    );
    if (checkCustomerStatus.length === 0)
      throw new Error("Customer doesn't exists");

    const checkAddressStatus =
      await new AddressModel().getCustomerAddressByAddressId(
        reqData.addressId,
        reqData.customerId
      );

    if (checkAddressStatus.length === 0)
      throw new Error("Address doesn't exists");

    let AddressInfo: any = {};

    if (!isEmpty(reqData.address_line1))
      AddressInfo.address_line1 = reqData.address_line1;

    if (!isEmpty(reqData.address_line2))
      AddressInfo.address_line2 = reqData.address_line2;

    if (!isEmpty(reqData.city)) AddressInfo.city = reqData.city;
    if (!isEmpty(reqData.state)) AddressInfo.state = reqData.state;
    if (!isEmpty(reqData.country)) AddressInfo.country = reqData.country;
    if (!isEmpty(reqData.postal_code))
      AddressInfo.postal_code = reqData.postal_code;
    if (!isUndefined(reqData.is_default))
      AddressInfo.is_default = reqData.is_default;

    await new AddressModel().updateAddress(
      AddressInfo,
      reqData.addressId,
      reqData.customerId
    );

    return { data: reqData };
  } catch (err: any) {
    throw err;
  }
};

const deleteAddress = async (reqData: any) => {
  try {
    const checkCustomerStatus = await new CustomerModel().getCustomerById(
      reqData.customerId
    );
    if (checkCustomerStatus.length === 0)
      throw new Error("Customer doesn't exists");

    const checkAddressStatus =
      await new AddressModel().getCustomerAddressByAddressId(
        reqData.addressId,
        reqData.customerId
      );

    if (checkAddressStatus.length === 0)
      throw new Error("Address doesn't exists");

    let AddressInfo: any = {
      status: 0,
    };

    await new AddressModel().updateAddress(
      AddressInfo,
      reqData.addressId,
      reqData.customerId
    );

    return { data: reqData };
  } catch (err: any) {
    throw err;
  }
};

const deleteAccount = async (reqData: any) => {
  try {
    const checkCustomerStatus = await new CustomerModel().getCustomerById(
      reqData.customerId
    );
    if (checkCustomerStatus.length === 0)
      throw new Error("Customer doesn't exists");

    let CustomerInfo = {
      status: 0,
    };

    await new CustomerModel().updateCustomerData(
      CustomerInfo,
      reqData.customerId
    );

    return { data: reqData };
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
  forgotPassword,
};
