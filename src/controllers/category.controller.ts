import IController from "../types/IController";
import { ApiError, ApiResult } from "../utilities/ApiResponse";
import httpStatusCodes from "http-status-codes";
import { Request, Response } from "express";
import CategoryService from "../services/category.service";

const getUserCategory: IController = async (req: Request, res: Response) => {
  try {
    const data: any = await CategoryService.getAllAdminCategories(req.body);
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

const addAdminCategory: IController = async (req: Request, res: Response) => {
  try {
    const data: any = await CategoryService.addCategory(req.body);
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

const updateAdminCategory: IController = async (
  req: Request,
  res: Response
) => {
  try {
    const data: any = await CategoryService.updateCategory(req.body);
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

const deleteAdminCategory: IController = async (
  req: Request,
  res: Response
) => {
  try {
    const data: any = await CategoryService.deleteCategory(req.body);
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

const getAdminSingleCategory: IController = async (
  req: Request,
  res: Response
) => {
  try {
    const data: any = await CategoryService.getSingleCategory(req.body);
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

const getCustomerAllCategories: IController = async (
  req: Request,
  res: Response
) => {
  try {
    const data: any = await CategoryService.getAllCustomerCategories(req.body);
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

const getCustomerCategoryOptions: IController = async (
  req: Request,
  res: Response
) => {
  try {
    const data: any = await CategoryService.getCategoryOptions(req.body);
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
  getUserCategory,
  addAdminCategory,
  updateAdminCategory,
  getAdminSingleCategory,
  deleteAdminCategory,
  getCustomerAllCategories,
  getCustomerCategoryOptions,
};
