import BaseModel from "../middlewares/baseModel.middleware";

export class CategoryModel extends BaseModel {
  async getSubcategoryById(subcategoryId: string) {
    return this._executeQuery(`SELECT * FROM Subcategories where id = ?`, [
      subcategoryId,
    ]);
  }

  async getAllAdminSubcategories(
    searchData: string,
    orderBy: string,
    limit: number,
    offset: number
  ) {
    return this._executeQuery(
      `SELECT usc.id, usc.category_id, usc.name, usc.status FROM Subcategories as usc ${searchData} ${orderBy} limit ? offset ?`,
      [limit, offset]
    );
  }

  async getAllAdminSubcategoriesCount(searchData: string) {
    return this._executeQuery(
      `SELECT usc.id, usc.category_id, usc.name, usc.status FROM Subcategories as usc ${searchData}`,
      []
    );
  }

  async getCustomerSubcategories(
    searchData: string,
    orderBy: string,
    limit: number,
    offset: number
  ) {
    return this._executeQuery(
      `SELECT usc.id, usc.category_id, usc.name, usc.status FROM Subcategories as usc WHERE usc.status = 1 ${searchData} ${orderBy} limit ? offset ?`,
      [limit, offset]
    );
  }

  async getCustomerSubcategoriesCount(searchData: string) {
    return this._executeQuery(
      `SELECT usc.id, usc.category_id, usc.name, usc.status FROM Subcategories as usc WHERE usc.status = 1 ${searchData}`,
      []
    );
  }

  async getSubcategoryByName(subcategoryName: string) {
    return this._executeQuery(`SELECT * FROM Sucategories WHERE name = ?`, [
      subcategoryName,
    ]);
  }

  async updateSubcategory(subcategoryData: any, subcategoryId: string) {
    return this._executeQuery(`UPDATE Subcategories SET ? WHERE id = ?`, [
      subcategoryData,
      subcategoryId,
    ]);
  }

  async addNewSubcategory(subcategoryData: any) {
    return this._executeQuery(`INSERT INTO Categories SET ?`, [
      subcategoryData,
    ]);
  }

  async getSubcategoriesByCategoryId(categoryId: string) {
    return this._executeQuery(
      `SELECT * FROM Subcategories WHERE category_id = ?`,
      [categoryId]
    );
  }

  async getSubcategoryByNameNotId(subcategoryName: string) {
    return this._executeQuery(`SELECT * FROM Subcategories WHERE name = ?`, [
      subcategoryName,
    ]);
  }
}
