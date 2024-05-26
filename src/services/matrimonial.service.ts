// like profile
// get profiles

import { MatrimonailProfileModel } from "../models/MatrimonialProfile.model";
import { CustomerModel } from "../models/customer.model";
import { isEmpty, isUndefined } from "lodash";

const createProfile = async (reqData: any) => {
  try {
    const checkCustomerStatus = await new CustomerModel().getCustomerById(
      reqData.customerId
    );
    if (checkCustomerStatus.length === 0)
      throw new Error("Customer doesn't exists");

    let profileInfo: any = {};

    if (!isUndefined(reqData.customer_id))
      profileInfo.customer_id = reqData.customer_id;

    if (!isEmpty(reqData.father_name))
      profileInfo.father_name = reqData.father_name.trim();

    if (!isEmpty(reqData.mother_name))
      profileInfo.mother_name = reqData.mother_name.trim();

    if (!isEmpty(reqData.date_of_birth))
      profileInfo.date_of_birth = reqData.date_of_birth.trim();

    if (!isEmpty(reqData.gender)) profileInfo.gender = reqData.gender.trim();

    if (!isEmpty(reqData.bio)) profileInfo.bio = reqData.bio;

    if (!isEmpty(reqData.current_city))
      profileInfo.current_city = reqData.current_city.trim();

    if (!isEmpty(reqData.current_state))
      profileInfo.current_state = reqData.current_state.trim();

    if (!isEmpty(reqData.religion))
      profileInfo.religion = reqData.religion.trim();

    if (!isEmpty(reqData.cast)) profileInfo.cast = reqData.cast.trim();

    if (!isEmpty(reqData.mother_tongue))
      profileInfo.mother_tongue = reqData.mother_tongue.trim();

    if (!isEmpty(reqData.height)) profileInfo.height = reqData.height;

    if (!isEmpty(reqData.education))
      profileInfo.education = reqData.education.trim();

    if (!isEmpty(reqData.occupation))
      profileInfo.occupation = reqData.occupation.trim();

    if (!isEmpty(reqData.income)) profileInfo.income = reqData.income;

    if (!isEmpty(reqData.marital_status))
      profileInfo.marital_status = reqData.marital_status.trim();

    if (!isEmpty(reqData.profile_picture))
      profileInfo.profile_picture = reqData.profile_picture;

    if (!isEmpty(reqData.status)) profileInfo.status = reqData.status;

    const insertionStatus = await new MatrimonailProfileModel().addProfile(
      profileInfo
    );

    reqData.profile_id = insertionStatus.insertId;

    return { data: reqData };
  } catch (err: any) {
    throw err;
  }
};

const updateProfile = async (reqData: any) => {
  try {
    const checkStatus =
      await new MatrimonailProfileModel().getMatrimonialProfileById(
        reqData.profileId
      );

    if (checkStatus.length === 0) throw new Error("Profile does not exists");

    let profileInfo: any = {};

    if (!isUndefined(reqData.customer_id))
      profileInfo.customer_id = reqData.customer_id;

    if (!isEmpty(reqData.father_name))
      profileInfo.father_name = reqData.father_name.trim();

    if (!isEmpty(reqData.mother_name))
      profileInfo.mother_name = reqData.mother_name.trim();

    if (!isEmpty(reqData.date_of_birth))
      profileInfo.date_of_birth = reqData.date_of_birth;

    if (!isEmpty(reqData.gender)) profileInfo.gender = reqData.gender.trim();

    if (!isEmpty(reqData.bio)) profileInfo.bio = reqData.bio;

    if (!isEmpty(reqData.current_city))
      profileInfo.current_city = reqData.current_city.trim();

    if (!isEmpty(reqData.current_state))
      profileInfo.current_state = reqData.current_state.trim();

    if (!isEmpty(reqData.religion))
      profileInfo.religion = reqData.religion.trim();

    if (!isEmpty(reqData.cast)) profileInfo.cast = reqData.cast.trim();

    if (!isEmpty(reqData.mother_tongue))
      profileInfo.mother_tongue = reqData.mother_tongue.trim();

    if (!isEmpty(reqData.height)) profileInfo.height = reqData.height;

    if (!isEmpty(reqData.education))
      profileInfo.education = reqData.education.trim();

    if (!isEmpty(reqData.occupation))
      profileInfo.occupation = reqData.occupation.trim();

    if (!isEmpty(reqData.income)) profileInfo.income = reqData.income;

    if (!isEmpty(reqData.marital_status))
      profileInfo.marital_status = reqData.marital_status.trim();

    if (!isEmpty(reqData.profile_picture))
      profileInfo.profile_picture = reqData.profile_picture;

    if (!isEmpty(reqData.status)) profileInfo.status = reqData.status;

    await new MatrimonailProfileModel().updateProfile(
      reqData.profileId,
      profileInfo
    );

    return { data: reqData };
  } catch (err: any) {
    throw err;
  }
};

const deleteProfile = async (reqData: any) => {
  try {
    const checkStatus =
      await new MatrimonailProfileModel().getMatrimonialProfileById(
        reqData.profileId
      );

    if (checkStatus.length === 0) throw new Error("Profile does not exists");

    const profileInfo: any = {
      status: 0,
    };

    await new MatrimonailProfileModel().updateProfile(
      reqData.profileId,
      profileInfo
    );

    return { data: reqData };
  } catch (err: any) {
    throw err;
  }
};

// Admin
const getAllProfiles = async (reqData: any) => {
  try {
    let SearchQuery = !isEmpty(reqData.search) ? `Search query` : ``;
    let countData =
      await new MatrimonailProfileModel().getAllMatrimonailProfilesCount(
        SearchQuery
      );
    let pagination = !isUndefined(reqData.setpagination)
      ? reqData.setpagination
      : false;
    let OrderQuery =
      !isEmpty(reqData.orderBy) && reqData.orderBy.key !== ""
        ? `ORDER BY ${reqData.orderBy.key} ${reqData.orderBy.order}`
        : `ORDER BY id ASC`;

    const data = await new MatrimonailProfileModel().getAllProfiles(
      SearchQuery,
      OrderQuery,
      pagination ? countData.length : reqData.pageSize,
      (reqData.pageIndex - 1) * reqData.pageSize
    );

    return { data };
  } catch (err: any) {
    throw err;
  }
};

const getProfileDetails = async (reqData: any) => {
  try {
    const data = await new MatrimonailProfileModel().getMatrimonialProfileById(
      reqData.profileId
    );

    if (data.length === 0) throw new Error("Profile does not exists");

    return { data };
  } catch (err: any) {
    throw err;
  }
};

const likeProfile = async (reqData: any) => {
  try {
  } catch (err: any) {
    throw err;
  }
};

export default {
  createProfile,
  updateProfile,
  deleteProfile,
  getAllProfiles,
  getProfileDetails,
  likeProfile,
};
