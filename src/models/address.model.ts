import BaseModel from "../middlewares/baseModel.middleware";

export class AddressModel extends BaseModel {
  async getAllAddressesOfCustomer(
    searchData: string,
    orderBy: string,
    limit: number,
    offset: number,
    customerId: string
  ) {
    return this._executeQuery(
      `SELECT id, address_line1, address_line2, city, state, postal_code, country, is_default 
      FROM Addresses WHERE customer_id = ? AND status = 1 ${searchData} ${orderBy} LIMIT ? OFFSET ?`,
      [customerId, limit, offset]
    );
  }

  async getAllAddressesCount(customerId: string, searchData: string) {
    return this._executeQuery(
      `SELECT id, address_line1, address_line2, city, state, postal_code, country, is_default 
    FROM Addresses WHERE customer_id = ? AND status = 1 ${searchData}`,
      [customerId]
    );
  }

  async getCustomerAddressesByCustomerId(customerId: string) {
    return this._executeQuery(
      `SELECT * FROM Addresses WHERE customer_id = ? AND status = 1`,
      [customerId]
    );
  }

  async getCustomerAddressByAddressId(addressId: string, customerId: string) {
    return this._executeQuery(
      `SELECT * FROM Addresses WHERE id = ? AND customer_id = ? AND status = 1`,
      [addressId, customerId]
    );
  }

  async addNewAddress(addressInfo: any) {
    return this._executeQuery(`INSERT INTO Addresses SET ?`, [addressInfo]);
  }

  async updateAddress(addressInfo: any, addressId: string, customerId: string) {
    return this._executeQuery(
      `UPDATE Addresses SET ? WHERE id = ? AND customer_id = ?`,
      [addressInfo, addressId, customerId]
    );
  }
}
