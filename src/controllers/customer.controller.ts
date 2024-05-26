import IController from "../types/IController";
import { ApiError, ApiResult } from "../utilities/ApiResponse";
import httpStatusCodes from "http-status-codes";
import { Request, Response } from "express";
import customersService from "../services/customers.service";

const signIn: IController = async (req: Request, res: Response) => {
  try {
    const data: any = await customersService.signIn(req.body);
    if (data instanceof Error) {
      ApiError(res, httpStatusCodes.BAD_REQUEST);
    } else {
      ApiResult(res, data, httpStatusCodes.CREATED);
    }
  } catch (err: any) {
    ApiError(res, httpStatusCodes.BAD_REQUEST, err.message);
    return;
  }
};
const signUp: IController = async (req: Request, res: Response) => {
  try {
    const data: any = await customersService.signUp(req.body);
    if (data instanceof Error) {
      ApiError(res, httpStatusCodes.BAD_REQUEST);
    } else {
      ApiResult(res, data, httpStatusCodes.CREATED);
    }
  } catch (err: any) {
    ApiError(res, httpStatusCodes.BAD_REQUEST, err.message);
    return;
  }
};
const sendOtp: IController = async (req: Request, res: Response) => {
  try {
    const data: any = await customersService.sendOtp(req.body);
    if (data instanceof Error) {
      ApiError(res, httpStatusCodes.BAD_REQUEST);
    } else {
      ApiResult(res, data, httpStatusCodes.CREATED);
    }
  } catch (err: any) {
    ApiError(res, httpStatusCodes.BAD_REQUEST, err.message);
    return;
  }
};
const verifyOtp: IController = async (req: Request, res: Response) => {
  try {
    const data: any = await customersService.verifyOtp(req.body);
    if (data instanceof Error) {
      ApiError(res, httpStatusCodes.BAD_REQUEST);
    } else {
      ApiResult(res, data, httpStatusCodes.CREATED);
    }
  } catch (err: any) {
    ApiError(res, httpStatusCodes.BAD_REQUEST, err.message);
    return;
  }
};
const resendOtp: IController = async (req: Request, res: Response) => {
  try {
    const data: any = await customersService.resendOtp(req.body);
    if (data instanceof Error) {
      ApiError(res, httpStatusCodes.BAD_REQUEST);
    } else {
      ApiResult(res, data, httpStatusCodes.CREATED);
    }
  } catch (err: any) {
    ApiError(res, httpStatusCodes.BAD_REQUEST, err.message);
    return;
  }
};
const resetPassword: IController = async (req: Request, res: Response) => {
  try {
    const data: any = await customersService.resetPassword(req.body);
    if (data instanceof Error) {
      ApiError(res, httpStatusCodes.BAD_REQUEST);
    } else {
      ApiResult(res, data, httpStatusCodes.CREATED);
    }
  } catch (err: any) {
    ApiError(res, httpStatusCodes.BAD_REQUEST, err.message);
    return;
  }
};
const forgotPassword: IController = async (req: Request, res: Response) => {
  try {
    const data: any = await customersService.forgotPassword(req.body);
    if (data instanceof Error) {
      ApiError(res, httpStatusCodes.BAD_REQUEST);
    } else {
      ApiResult(res, data, httpStatusCodes.CREATED);
    }
  } catch (err: any) {
    ApiError(res, httpStatusCodes.BAD_REQUEST, err.message);
    return;
  }
};
const updateCustomerDetails: IController = async (
  req: Request,
  res: Response
) => {
  try {
    const data: any = await customersService.updateCustomerDetails(req.body);
    if (data instanceof Error) {
      ApiError(res, httpStatusCodes.BAD_REQUEST);
    } else {
      ApiResult(res, data, httpStatusCodes.CREATED);
    }
  } catch (err: any) {
    ApiError(res, httpStatusCodes.BAD_REQUEST, err.message);
    return;
  }
};
const addAddress: IController = async (req: Request, res: Response) => {
  try {
    const data: any = await customersService.addAddress(req.body);
    if (data instanceof Error) {
      ApiError(res, httpStatusCodes.BAD_REQUEST);
    } else {
      ApiResult(res, data, httpStatusCodes.CREATED);
    }
  } catch (err: any) {
    ApiError(res, httpStatusCodes.BAD_REQUEST, err.message);
    return;
  }
};
const updateAddress: IController = async (req: Request, res: Response) => {
  try {
    const data: any = await customersService.updateAddress(req.body);
    if (data instanceof Error) {
      ApiError(res, httpStatusCodes.BAD_REQUEST);
    } else {
      ApiResult(res, data, httpStatusCodes.CREATED);
    }
  } catch (err: any) {
    ApiError(res, httpStatusCodes.BAD_REQUEST, err.message);
    return;
  }
};
const deleteAddress: IController = async (req: Request, res: Response) => {
  try {
    const data: any = await customersService.deleteAddress(req.body);
    if (data instanceof Error) {
      ApiError(res, httpStatusCodes.BAD_REQUEST);
    } else {
      ApiResult(res, data, httpStatusCodes.CREATED);
    }
  } catch (err: any) {
    ApiError(res, httpStatusCodes.BAD_REQUEST, err.message);
    return;
  }
};
const deleteAccount: IController = async (req: Request, res: Response) => {
  try {
    const data: any = await customersService.deleteAccount(req.body);
    if (data instanceof Error) {
      ApiError(res, httpStatusCodes.BAD_REQUEST);
    } else {
      ApiResult(res, data, httpStatusCodes.CREATED);
    }
  } catch (err: any) {
    ApiError(res, httpStatusCodes.BAD_REQUEST, err.message);
    return;
  }
};
const getAllAddressesOfCustomer: IController = async (
  req: Request,
  res: Response
) => {
  try {
    const data: any = await customersService.getAllAddressesOfCustomer(
      req.body
    );
    if (data instanceof Error) {
      ApiError(res, httpStatusCodes.BAD_REQUEST);
    } else {
      ApiResult(res, data, httpStatusCodes.CREATED);
    }
  } catch (err: any) {
    ApiError(res, httpStatusCodes.BAD_REQUEST, err.message);
    return;
  }
};
const getCustomerDetails: IController = async (req: Request, res: Response) => {
  try {
    const data: any = await customersService.getCustomerDetails(req.body);
    if (data instanceof Error) {
      ApiError(res, httpStatusCodes.BAD_REQUEST);
    } else {
      ApiResult(res, data, httpStatusCodes.CREATED);
    }
  } catch (err: any) {
    ApiError(res, httpStatusCodes.BAD_REQUEST, err.message);
    return;
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
  updateCustomerDetails,
  addAddress,
  updateAddress,
  deleteAddress,
  deleteAccount,
  getAllAddressesOfCustomer,
  getCustomerDetails,
};
