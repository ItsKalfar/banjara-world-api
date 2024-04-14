import { Response } from "express";
import httpStatusCodes from "http-status-codes";

export interface IOverrideRequest {
  code: number;
  message: string;
  positive: string;
  negative: string;
}

export interface ICookie {
  key: string;
  value: string;
}

export const ApiResult = (
  res: Response,
  result: object,
  status: number = 200
  //cookie: ICookie = null,
) => {
  res.status(status);
  /* if (cookie) {
      res.cookie(cookie.key, cookie.value);
  }*/
  res.json({
    status: true,
    message: "SUCCESS",
    result,
  });
};

export const ApiError = (
  res: Response,
  status: number = 400,
  error: string = httpStatusCodes.getStatusText(status)
  //override: IOverrideRequest = null,
) => {
  res.status(status).json({
    //override,
    status: false,
    message: error,
    result: null,
  });
};

export const setCookie = (res: Response, key: string, value: string) => {
  res.cookie(key, value);
};
