import IController from "../types/IController";
import { ApiError, ApiResult } from "../utilities/ApiResponse";
import httpStatusCodes from "http-status-codes";
import { Request, Response } from "express";
import subcategoryService from "../services/subcategory.service";

const getAllAdminSubcategories: IController = async (
  req: Request,
  res: Response
) => {
  try {
    const data = await subcategoryService.getAllAdminSubcategories(req.body);
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

const getCustomerSubcategories: IController = async (
  req: Request,
  res: Response
) => {
  try {
    const data = await subcategoryService.getCustomerSubcategories(req.body);
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

const getSingleSubcategory: IController = async (
  req: Request,
  res: Response
) => {
  try {
    const data = await subcategoryService.getSingleSubcategory(req.body);
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

const getSubcategoriesOptions: IController = async (
  req: Request,
  res: Response
) => {
  try {
    const data = await subcategoryService.getSubcategoriesOptions(req.body);
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

const updateSucategory: IController = async (req: Request, res: Response) => {
  try {
    const data = await subcategoryService.updateSucategory(req.body);
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

const deleteSubcategory: IController = async (req: Request, res: Response) => {
  try {
    const data = await subcategoryService.deleteSubcategory(req.body);
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

const addSubcategory: IController = async (req: Request, res: Response) => {
  try {
    const data = await subcategoryService.addSubcategory(req.body);
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
  getAllAdminSubcategories,
  getCustomerSubcategories,
  getSingleSubcategory,
  getSubcategoriesOptions,
  updateSucategory,
  deleteSubcategory,
  addSubcategory,
};
