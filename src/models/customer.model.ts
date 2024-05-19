import BaseModel from "../middlewares/baseModel.middleware";

export class CustomerModel extends BaseModel {
  async getCustomerById(customerId: string) {
    return this._executeQuery(`SELECT * FROM Customers WHERE id = ?`, [
      customerId,
    ]);
  }

  async getAllCustomers(
    searchData: string,
    orderBy: string,
    limit: number,
    offset: number
  ) {
    return this._executeQuery(
      `SELECT id, name, email, mobile_number, profile_picture, status FROM Customers ${searchData} ${orderBy} limit ? offset ?`,
      [limit, offset]
    );
  }

  async getAllCustomersCount(searchData: string) {
    return this._executeQuery(
      `SELECT id, name, email, mobile_number, profile_picture, status FROM Customers ${searchData}`,
      []
    );
  }

  async updateCustomerData(customerData: any, customerId: string) {
    return this._executeQuery(`UPDATE Customers SET ? WHERE id = ?`, [
      customerData,
      customerId,
    ]);
  }

  async addNewCustomer(customerData: any) {
    return this._executeQuery(`INSERT INTO Customers SET ?`, [customerData]);
  }
}
