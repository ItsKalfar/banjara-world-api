import BaseModel from "../middlewares/baseModel.middleware";

export class CategoryModel extends BaseModel {
    async getCategoryById(categoryId: string){
        return this._executeQuery(`SELECT * FROM Categories where id = ?`, [categoryId])
    }

    async getCategoryByNameNotID(categoryName: string,Id:string){
        return await this._executeQuery(`SELECT * FROM Categories WHERE name = "${categoryName}" and id != ?`, [Id]);
    }

    async getAllCategories(searchData : string, orderBy:string, limit:number, offset:number){
        return this._executeQuery(`SELECT uc.id, uc.name, uc.icon, uc.status FROM Categories as uc ${searchData} ${orderBy} limit ? offset ?`, [limit, offset]);
    }

    async getCategoryCount(searchData : string) {
        return await this._executeQuery(`SELECT uc.id,uc.name,uc.icon FROM Categories as uc ${searchData}`, []);
    }

    async getCustomerCategories(searchData : string, orderBy:string,limit:number, offset: number){
        return this._executeQuery(`SELECT uc.id, uc.name, uc.icon, uc.status FROM Categories as uc WHERE uc.status = 1 ${searchData} ${orderBy} limit ? offset ?`, [])
    }

    async getCustomerCategoryCount(searchData : string) {
        return await this._executeQuery(`SELECT uc.id,uc.name,uc.icon FROM Categories as uc WHERE uc.status = 1 ${searchData}`, []);
    }

    async getCategoryByName(categoryName: string){
        return await this._executeQuery(`SELECT * FROM Categories WHERE name = "${categoryName} "`, [categoryName]);
    }

    async addCategory(categoryInfo: any){
        return this._executeQuery(`INSERT INTO Categories SET ?`, [categoryInfo])
    }

    async updateCategory(categoryData:any, categoryId: string) {
        return await this._executeQuery(`UPDATE Categories SET ? WHERE id = ?`, [categoryData, categoryId]);
    }

    async getCategoryOptions(){
        return this._executeQuery(`SELECT * FROM Categories WHERE status = 1`, [])
    }
}