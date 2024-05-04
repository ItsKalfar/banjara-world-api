import BaseModel from "../../middlewares/baseModel.middleware";


export class UsersModel extends BaseModel {
    async fetchUsersByEmail(email: string){
        return this._executeQuery(`SELECT id, name, email from users where email = ?`, [email])
    }

    async addNewUser(userData:any) {
        return await this._executeQuery(`INSERT INTO users set ?`, [userData]);
    }

    async updateUser(userData:any, userId: string) {
        return await this._executeQuery(`UPDATE users SET ? WHERE user_id = ?`, [userData, userId]);
    }
    async getUserCount(SearchQuery:string) {
        return await this._executeQuery(`SELECT first_name, last_name, mobile, user_profile From users ${SearchQuery}`, []);
    }
    async getUsersLimitOffset(searchData : string, orderBy:string, limit:number, offset:number) {
        return await this._executeQuery(`SELECT id, email, first_name, last_name, mobile, active, user_profile FROM users ${searchData} ${orderBy} LIMIT ? OFFSET ?`, [limit,offset]);
    }
}