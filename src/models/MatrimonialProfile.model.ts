import BaseModel from "../middlewares/baseModel.middleware";

export class CategoryModel extends BaseModel {
    async getAllCategories(){
        return this._executeQuery(`SELECT * FROM Categories`, [])
    }
}