import { CategoryModel } from "../models/categories.model";
import { isEmpty, isUndefined } from "lodash";

// Admin
const getAllAdminCategories = async (reqData: any) => {
  try {
    let SearchQuery = !isEmpty(reqData.search)
      ? `WHERE uc.name LIKE '%${reqData.search}%'`
      : ``;
    let countData = await new CategoryModel().getCategoryCount(SearchQuery);
    let pagination = !isUndefined(reqData.setpagination)
      ? reqData.setpagination
      : false;
    let orderQuery =
      !isEmpty(reqData.orderBy) && reqData.orderBy.key !== ""
        ? ` ORDER BY ${reqData.orderBy.key} ${reqData.orderBy.order}`
        : `ORDER BY uc.id ASC`;
    const data = await new CategoryModel().getAllCategories(
      SearchQuery,
      orderQuery,
      pagination ? countData.length : reqData.pageSize,
      (reqData.pageIndex - 1) * reqData.pageSize
    );
    return { data: data, count: isEmpty(countData) ? 0 : countData.length };
  } catch (err: any) {
    throw err;
  }
};

const addCategory = async (reqData: any) => {
  try {
    const checkStatus = await new CategoryModel().getCategoryByName(
      reqData.name.trim()
    );
    if (checkStatus.length > 0) throw new Error(`Category Name already exist`);

    let CategoryInfo: any = {
      name: reqData.name.trim(),
      icon: reqData.icon,
    };

    const insertionStatus = await new CategoryModel().addCategory(CategoryInfo);
    reqData.categoryId = insertionStatus.insertId;
    return { data: reqData };
  } catch (err: any) {
    throw err;
  }
};

const updateCategory = async (reqData: any) => {
  try {
    const checkStatus = await new CategoryModel().getCategoryById(
      reqData.categoryId
    );
    if (checkStatus.length === 0) throw new Error("Category does not exist");

    const Category_info: any = {};
    if (!isEmpty(reqData.name)) {
      const checkNameIfAlreadyExists =
        await new CategoryModel().getCategoryByNameNotID(
          reqData.name.trim(),
          reqData.categoryId
        );
      if (checkNameIfAlreadyExists.length > 0)
        throw new Error(`Category Name already exist`);
      Category_info.name = reqData.name.trim();
    }
    if (!isUndefined(reqData.icon)) Category_info.icon = reqData.icon;
    if (!isUndefined(reqData.status)) Category_info.status = reqData.status;

    await new CategoryModel().updateCategory(Category_info, reqData.categoryId);
    return { data: reqData };
  } catch (err: any) {
    throw err;
  }
};

const deleteCategory = async (reqData: any) => {
  try {
    const checkStatus = await new CategoryModel().getCategoryById(
      reqData.categoryId
    );
    if (checkStatus.length === 0) throw new Error("Category does not exist");

    const Category_info: any = {
      status: 0,
    };
    await new CategoryModel().updateCategory(Category_info, reqData.categoryId);
    return { data: reqData };
  } catch (err: any) {
    throw err;
  }
};

const getSingleCategory = async (reqData: any) => {
  try {
    const data = await new CategoryModel().getCategoryById(reqData.categoryId);
    if (data.length === 0) throw new Error("Category does not exist");

    return { data };
  } catch (err: any) {
    throw err;
  }
};

// Seller, Customer
const getAllCustomerCategories = async (reqData: any) => {
  try {
    let SearchQuery = !isEmpty(reqData.search)
      ? `Where uc.name like '%${reqData.search}%'`
      : ``;
    let countData = await new CategoryModel().getCustomerCategoryCount(
      SearchQuery
    );
    let pagination = !isUndefined(reqData.setpagination)
      ? reqData.setpagination
      : false;
    let orderQuery =
      !isEmpty(reqData.orderBy) && reqData.orderBy.key !== ""
        ? ` ORDER BY ${reqData.orderBy.key} ${reqData.orderBy.order}`
        : `ORDER BY uc.id ASC`;
    const data = await new CategoryModel().getCustomerCategories(
      SearchQuery,
      orderQuery,
      pagination ? countData.length : reqData.pageSize,
      (reqData.pageIndex - 1) * reqData.pageSize
    );
    return { data: data, count: isEmpty(countData) ? 0 : countData.length };
  } catch (err: any) {
    throw err;
  }
};

const getCategoryOptions = async (reqData: any) => {
  try {
    return await new CategoryModel().getCategoryOptions();
  } catch (err: any) {
    throw err;
  }
};

export default {
  getAllAdminCategories,
  addCategory,
  updateCategory,
  getSingleCategory,
  deleteCategory,
  getAllCustomerCategories,
  getCategoryOptions,
};
