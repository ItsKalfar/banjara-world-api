import MySql from "../database/MySql";
import { Connection } from "mysql2/promise";

class BaseModel {
  constructor() {}

  async _executeQuery(query: string, params: Array<any>) {
    let self = this;
    return await MySql.execute_query(query, params);
  }

  async _executeQueryTransaction(
    sqlConnection: Connection,
    query: string,
    params: Array<any>
  ) {
    let self = this;
    return await MySql.execute_query_transaction(sqlConnection, query, params);
  }

  async _beginTransaction(sqlConnection: Connection) {
    let self = this;
    return await MySql.begin_transaction(sqlConnection);
  }

  async _commitTransaction(sqlConnection: Connection) {
    let self = this;
    return await MySql.commit_transaction(sqlConnection);
  }

  async _rollbackTransaction(sqlConnection: Connection) {
    let self = this;
    return await MySql.rollback_transaction(sqlConnection);
  }

  async _getConnection() {
    return await MySql.getConnection();
  }

  async _releaseConnection(sqlConnection: Connection) {
    return await MySql.releaseConnection(sqlConnection);
  }
}

export default BaseModel;
