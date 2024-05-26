import { isUndefined, isEmpty } from "lodash";
import { ContentModel } from "../models/content.model";

const getAllAdminContent = async (reqData: any) => {
  try {
    const countData = await new ContentModel().getAllAdminContentCount();
    let pagination = !isUndefined(reqData.setpagination)
      ? reqData.setpagination
      : false;
    let orderQuery =
      !isEmpty(reqData.orderBy) && reqData.orderBy.key !== ""
        ? ` ORDER BY ${reqData.orderBy.key} ${reqData.orderBy.order}`
        : `ORDER BY id ASC`;

    const data = await new ContentModel().getAllAdminContent(
      orderQuery,
      pagination ? countData.length : reqData.pageSize,
      (reqData.pageIndex - 1) * reqData.pageSize
    );
    return { data: data, count: isEmpty(countData) ? 0 : countData.length };
  } catch (err: any) {
    throw err;
  }
};

const getAllCustomerContent = async (reqData: any) => {
  try {
    return await new ContentModel().getCustomerContent();
  } catch (err: any) {
    throw err;
  }
};

const getSingleContent = async (reqData: any) => {
  try {
  } catch (err: any) {
    throw err;
  }
};

const addContent = async (reqData: any) => {
  try {
  } catch (err: any) {
    throw err;
  }
};

const updateContent = async (reqData: any) => {
  try {
  } catch (err: any) {
    throw err;
  }
};

const deleteContent = async (reqData: any) => {
  try {
  } catch (err: any) {
    throw err;
  }
};
