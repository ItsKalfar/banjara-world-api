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
    const data = await new ContentModel().getContentById(reqData.contentId);
    if (data.length === 0) throw new Error("Content does not exists");

    return { data };
  } catch (err: any) {
    throw err;
  }
};

const addContent = async (reqData: any) => {
  try {
    let contentInfo: any = {};

    if (!isEmpty(reqData.name)) contentInfo.name = reqData.name;
    if (!isEmpty(reqData.heading)) contentInfo.heading = reqData.heading;
    if (!isEmpty(reqData.subheading))
      contentInfo.subheading = reqData.subheading;
    if (!isEmpty(reqData.image_link))
      contentInfo.image_link = reqData.image_link;
    if (!isEmpty(reqData.status)) contentInfo.status = reqData.status;

    const insertionStatus = await new ContentModel().addContent(contentInfo);
    reqData.contentId = insertionStatus.insertId;

    return { data: reqData };
  } catch (err: any) {
    throw err;
  }
};

const updateContent = async (reqData: any) => {
  try {
    const data = await new ContentModel().getContentById(reqData.contentId);
    if (data.length === 0) throw new Error("Content does not exists");

    let contentInfo: any = {};

    if (!isEmpty(reqData.name)) contentInfo.name = reqData.name;
    if (!isEmpty(reqData.heading)) contentInfo.heading = reqData.heading;
    if (!isEmpty(reqData.subheading))
      contentInfo.subheading = reqData.subheading;
    if (!isEmpty(reqData.image_link))
      contentInfo.image_link = reqData.image_link;
    if (!isEmpty(reqData.status)) contentInfo.status = reqData.status;

    await new ContentModel().updateContent(contentInfo, reqData.contentId);
    return { data };
  } catch (err: any) {
    throw err;
  }
};

const deleteContent = async (reqData: any) => {
  try {
    const data = await new ContentModel().getContentById(reqData.contentId);
    if (data.length === 0) throw new Error("Content does not exists");

    let contentInfo: any = {
      status: 0,
    };

    await new ContentModel().updateContent(contentInfo, reqData.contentId);
    return { data };
  } catch (err: any) {
    throw err;
  }
};

export default {
  getAllAdminContent,
  getAllCustomerContent,
  getSingleContent,
  addContent,
  updateContent,
  deleteContent,
};
