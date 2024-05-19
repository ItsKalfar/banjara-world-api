import BaseModel from "../middlewares/baseModel.middleware";

export class AdminModel extends BaseModel {
  async getAdminByEmail(email: string) {
    return this._executeQuery(`SELECT * FROM Admins WHERE email = ?`, [email]);
  }

  async getAdminById(adminId: string) {
    return this._executeQuery(`SELECT * FROM Admins WHERE id = ?`, [adminId]);
  }

  async getAllAdmins(
    searchData: string,
    orderBy: string,
    limit: number,
    offset: number
  ) {
    return this._executeQuery(
      `SELECT id, name, email, profile_picture, status FROM Admins ${searchData} ${orderBy} limit ? offset ?`,
      [limit, offset]
    );
  }

  async getAdminsCount(searchData: any) {
    return this._executeQuery(
      `SELECT id, name, email, profile_picture, status FROM Admins ${searchData}`,
      []
    );
  }

  async addAdmin(adminInfo: any) {
    return this._executeQuery(`INSERT INTO Admins SET ?`, [adminInfo]);
  }

  async updateAdmin(adminInfo: any, adminId: string) {
    return this._executeQuery(`UPDATE Admins SET ? WHERE id = ?`, [
      adminInfo,
      adminId,
    ]);
  }
}
