import mysql = require('mysql2/promise');
import {Pool, Connection} from "mysql2/promise";
import { appConfig } from '../config/config';
//import LOGGER from '../config/LOGGER';

export default class MySQL{
    private static _instance : MySQL;
    poolConnection : Pool;
    connected: boolean = false;
    constructor(){
        this.poolConnection = mysql.createPool(appConfig.MYSQLDB);
        this.connect();
    }

    public static get instance(){
        return this._instance || (this._instance = new this());
    }

    public static async releaseConnection(sqlClient : any){
        return sqlClient.release();
    };

    // @ts-ignore
    public static async getConnection() {
        return await this.instance.poolConnection.getConnection();
    };

    public static async execute_query( query:string, params : any)  {
        // @ts-ignore
        const [rows, fields] = await this.instance.poolConnection.query(query, params);
        let tempResult: any = rows;
        return tempResult;
    }

    public static async execute_query_transaction( sqlClient : Connection, query:string, params : any){
        const [rows,fields] = await sqlClient.query(query, params);
        let tempResult: any = rows;
        return tempResult;
    }

    public static async begin_transaction( sqlClient : Connection){
        return await sqlClient.beginTransaction();
    }

    public static async commit_transaction( sqlClient : Connection){
        return await sqlClient.commit();
    }

    public static async rollback_transaction( sqlClient : Connection){
        await sqlClient.rollback()
    }

    async connect() {
        let connection = await this.poolConnection.getConnection();
        if(connection instanceof Error) this.connected = false;
        this.connected = true;
        connection.release();
    }
}