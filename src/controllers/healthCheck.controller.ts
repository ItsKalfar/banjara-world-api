import httpStatusCodes from "http-status-codes";
import IController from "../types/IController";
import { ApiResult, ApiError } from "../utilities/ApiResponse";
import HealthCheckService from "../services/healthCheck.service";

const healthCheck: IController = async (req, res) => {
  try {
    const data = await HealthCheckService.healthCheck(req.body);
    if (data instanceof Error) {
      ApiError(res, httpStatusCodes.BAD_REQUEST);
    } else {
      ApiResult(res, data, httpStatusCodes.OK);
    }
  } catch (e: any) {
    ApiError(res, httpStatusCodes.BAD_REQUEST, e.message);
    return;
  }
};

export default {
  healthCheck,
};
