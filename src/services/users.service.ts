import { generateHash, verifyPassword } from "../utilities/Hashing";
import jwt from "jsonwebtoken";
import { appConfig } from "../config/config";
import moment from "moment";
import formidable from "formidable";
import { transporter } from "../utilities/SendEmail";
import { uploadFilestreamToS3, FilestreamToS3 } from "../utilities/BucketUtilities";


const signUp = async (reqData: any) => {
    try{

    }catch(err: any){
        throw err;
    }
}

const signIn = async (reqData: any) => {
    try{

    }catch(err: any){
        throw err;
    }
}

const resetPassword = async (reqData: any) => {
    try{

    }catch(err: any){
        throw err;
    }
}

const forgotPassword = async (reqData: any) => {
    try{

    }catch(err: any){
        throw err;
    }
}

export default {
    signIn, signUp, resetPassword
}