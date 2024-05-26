import IController from "../types/IController";
import { ApiError, ApiResult } from "../utilities/ApiResponse";
import httpStatusCodes from "http-status-codes";
import { Request, Response } from "express";
import sellerService from "../services/seller.service";

const signIn: IController = async (req: Request, res: Response) => {
  try {
    const data = await sellerService.signIn(req.body);
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
    const data = await sellerService.signUp(req.body);
    if (data instanceof Error) {
      ApiError(res, httpStatusCodes.BAD_REQUEST);
    } else {
      ApiResult(res, data, httpStatusCodes.CREATED);
    }
  } catch (err: any) {
    ApiError(res, err.message);
    return;
  }
};

const updateProfile: IController = async (req: Request, res: Response) => {
  try {
    const data = await sellerService.updateProfile(req.body);
    if (data instanceof Error) {
      ApiError(res, httpStatusCodes.BAD_REQUEST);
    } else {
      ApiResult(res, data, httpStatusCodes.CREATED);
    }
  } catch (err: any) {
    ApiError(res, err.message);
    return;
  }
};

const deleteProfile: IController = async (req: Request, res: Response) => {
  try {
    const data = await sellerService.deleteProfile(req.body);
    if (data instanceof Error) {
      ApiError(res, httpStatusCodes.BAD_REQUEST);
    } else {
      ApiResult(res, data, httpStatusCodes.CREATED);
    }
  } catch (err: any) {
    ApiError(res, err.message);
    return;
  }
};

export default {
  signIn,
  signUp,
  deleteProfile,
  updateProfile,
};
