import BaseModel from "../middlewares/baseModel.middleware";

export class ContentModel extends BaseModel {
  async getAllAdminContent(orderBy: string, limit: number, offset: number) {
    return this._executeQuery(
      `SELECT * FROM Content ${orderBy} limit ? offset ?`,
      [limit, offset]
    );
  }

  async getAllAdminContentCount() {
    return this._executeQuery(`SELECT * FROM Content`, []);
  }

  async getCustomerContent() {
    return this._executeQuery(`SELECT * FROM Content WHERE status = 1`, []);
  }

  async getContentById(contentId: string) {
    return this._executeQuery(`SELECT * FROM Content WHERE id = ?`, [
      contentId,
    ]);
  }

  async addContent(contentInfo: any) {
    return this._executeQuery(`INSERT INTO Content SET ?`, [contentInfo]);
  }

  async updateContent(contentInfo: any, contentId: string) {
    return this._executeQuery(`UPDATE Content SET ? WHERE id = ?`, [
      contentInfo,
      contentId,
    ]);
  }
}
