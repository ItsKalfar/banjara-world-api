import BaseModel from "../middlewares/baseModel.middleware";

export class MatrimonailProfileModel extends BaseModel {
  async getProfileById(profileId: string) {
    return this._executeQuery(
      `SELECT * FROM MatrimonialProfiles WHERE id = ?`,
      [profileId]
    );
  }

  async getAllProfiles(
    searchData: string,
    orderBy: string,
    limit: number,
    offset: number
  ) {
    return this._executeQuery(
      `SELECT id, customer_id, father_name, mother_name, date_of_birth, gender,bio, current_city, current_state,religion, cast, mother_tongue, height, education, occupation, income, marital_status, profile_picture, status FROM MatrimonialProfiles ${searchData} ${orderBy} limit ? offset ?`,
      [limit, offset]
    );
  }

  async getAllMatrimonailProfilesCount(searchData: string) {
    return this._executeQuery(
      `SELECT id, customer_id, father_name, mother_name, date_of_birth, gender,bio, current_city, current_state,religion, cast, mother_tongue, height, education, occupation, income, marital_status, profile_picture, status FROM MatrimonialProfiles ${searchData}`,
      []
    );
  }

  async getMatrimonialProfileById(profileId: string) {
    return this._executeQuery(`SELECT * FROM MatrimonialProfiles`, [profileId]);
  }

  async addProfile(profileData: any) {
    return this._executeQuery(`INSERT INTO MatrimonialProfiles SET ?`, [
      profileData,
    ]);
  }

  async updateProfile(profileId: string, profileData: string) {
    return this._executeQuery(`UPDATE MatrimonialProfiles SET ? WHERE id = ?`, [
      profileData,
      profileId,
    ]);
  }

  async likeProfile(data: any) {
    return this._executeQuery(`INSERT INTO MatrimonialProfileLikes SET ?`, [
      data,
    ]);
  }
}
