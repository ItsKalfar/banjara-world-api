import IController from "../types/IController";
import { ApiError, ApiResult } from "../utilities/ApiResponse";
import httpStatusCodes from "http-status-codes";
import { Request, Response } from "express";
import CategoryService from "../services/category.service";

const getUserCategory: IController = async (req: Request, res: Response) => {
  try {
    const data: any = await CategoryService.getAllCategories(req.body);
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
    getUserCategory
}