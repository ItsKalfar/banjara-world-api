import BaseModel from "../middlewares/baseModel.middleware";

export class SellerModel extends BaseModel {
  async getSellerById(sellerId: string) {
    return this._executeQuery(`SELECT * FROM Sellers WHERE id = ?`, [sellerId]);
  }

  async getAllAdminSellers(
    searchData: string,
    orderBy: string,
    limit: number,
    offset: number
  ) {
    return this._executeQuery(
      `SELECT name, email, store_name, store_description, profile_picture, status FROM Sellers ${searchData} ${orderBy} limit ? offset ?`,
      [limit, offset]
    );
  }

  async getAllAdminSellersCount(searchData: string) {
    return this._executeQuery(
      `SELECT name, email, store_name, store_description, profile_picture, status FROM Sellers ${searchData}`,
      []
    );
  }

  async getCustomerSeller(
    searchData: string,
    orderBy: string,
    limit: number,
    offset: number
  ) {
    return this._executeQuery(
      `SELECT name, email, store_name, store_description, profile_picture, status FROM Sellers WHERE status = 1 ${searchData} ${orderBy} limit ? offset ?`,
      [limit, offset]
    );
  }

  async getCustomerSellerCount(searchData: string) {
    return this._executeQuery(
      `SELECT name, email, store_name, store_description, profile_picture, status FROM Sellers WHERE status = 1 ${searchData}`,
      []
    );
  }

  async addSeller(sellerInfo: any) {
    return this._executeQuery(`INSERT INTO Sellers SET ?`, [sellerInfo]);
  }

  async updateSeller(sellerInfo: any, sellerId: string) {
    return this._executeQuery(`UPDATE Sellers SET ? WHERE id = ?`, [
      sellerInfo,
      sellerId,
    ]);
  }
}
