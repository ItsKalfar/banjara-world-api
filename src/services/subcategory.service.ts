import { SubcategoryModel } from "../models/subcategory.model";
import { isEmpty, isUndefined } from "lodash";

const getAllAdminSubcategories = async (reqData: any) => {
  try {
    let SearchQuery = !isEmpty(reqData.search)
      ? `WHERE usc.name LIKE '%${reqData.search}%'`
      : ``;
    let countData = await new SubcategoryModel().getAllAdminSubcategoriesCount(
      SearchQuery
    );
    let pagination = !isUndefined(reqData.setpagination)
      ? reqData.setpagination
      : false;
    let orderQuery =
      !isEmpty(reqData.orderBy) && reqData.orderBy.key !== ""
        ? ` ORDER BY ${reqData.orderBy.key} ${reqData.orderBy.order}`
        : `ORDER BY usc.id ASC`;

    const data = await new SubcategoryModel().getAllAdminSubcategories(
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

const addSubcategory = async (reqData: any) => {
  try {
    const checkStatus = await new SubcategoryModel().getSubcategoryByName(
      reqData.name.trim()
    );

    if (checkStatus.length > 0)
      throw new Error(`Subcategory name already exists`);

    let SubcategoryInfo: any = {
      name: reqData.name.trim(),
      category_id: reqData.categoryId,
    };

    const insertionStatus = await new SubcategoryModel().addNewSubcategory(
      SubcategoryInfo
    );
    reqData.subcategoryId = insertionStatus.insertId;
    return { data: reqData };
  } catch (err: any) {
    throw err;
  }
};

const updateSucategory = async (reqData: any) => {
  try {
    const checkStatus = await new SubcategoryModel().getSubcategoryById(
      reqData.subcategoryId
    );

    if (checkStatus.length === 0)
      throw new Error(`Subcategory does not exists`);

    let SubcategoryInfo: any = {};

    if (!isEmpty(reqData.name)) SubcategoryInfo.name = reqData.name;
    if (!isUndefined(reqData.categoryId))
      SubcategoryInfo.category_id = reqData.categoryId;
    if (!isUndefined(reqData.status)) SubcategoryInfo.status = reqData.status;

    await new SubcategoryModel().updateSubcategory(
      SubcategoryInfo,
      reqData.subcategoryId
    );

    return { data: reqData };
  } catch (err: any) {
    throw err;
  }
};

const deleteSubcategory = async (reqData: any) => {
  try {
    const checkStatus = await new SubcategoryModel().getSubcategoryById(
      reqData.subcategoryId
    );

    if (checkStatus.length === 0)
      throw new Error(`Subcategory does not exists`);

    let SubcategoryInfo: any = {
      status: 0,
    };

    await new SubcategoryModel().updateSubcategory(
      SubcategoryInfo,
      reqData.subcategoryId
    );

    return { data: reqData };
  } catch (err: any) {
    throw err;
  }
};

const getSingleSubcategory = async (reqData: any) => {
  try {
    const data = await new SubcategoryModel().getSubcategoryById(
      reqData.subcategoryId
    );

    if (data.length === 0) throw new Error(`Subcategory does not exists`);

    return { data };
  } catch (err: any) {
    throw err;
  }
};

const getCustomerSubcategories = async (reqData: any) => {
  try {
    let SearchQuery = !isEmpty(reqData.search)
      ? `WHERE usc.name LIKE '%${reqData.search}%'`
      : ``;
    let countData = await new SubcategoryModel().getCustomerSubcategoriesCount(
      SearchQuery
    );
    let pagination = !isUndefined(reqData.setpagination)
      ? reqData.setpagination
      : false;
    let orderQuery =
      !isEmpty(reqData.orderBy) && reqData.orderBy.key !== ""
        ? ` ORDER BY ${reqData.orderBy.key} ${reqData.orderBy.order}`
        : `ORDER BY usc.id ASC`;

    const data = await new SubcategoryModel().getCustomerSubcategories(
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

const getSubcategoriesOptions = async (reqData: any) => {
  try {
    return await new SubcategoryModel().getSubcategoryOptions(
      reqData.categoryId
    );
  } catch (err: any) {
    throw err;
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
