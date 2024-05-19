import { CategoryModel } from "../models/MatrimonialProfile.model";
import { isEmpty, isUndefined } from "lodash";

const getAllCategories = async (reqData: any) => {
    try{
        const data = await new CategoryModel().getAllCategories();

    }catch(err: any){
        throw err;
    }
}

export default {
    getAllCategories
}