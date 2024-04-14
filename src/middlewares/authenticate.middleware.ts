import express from "express";
import httpStatusCodes from "http-status-codes";
import { ApiError } from "../utilities/ApiResponse";
import { verifyJwtToken } from "../utilities/Encryption";
import { extractCookieFromRequest } from "../utilities/ApiUtilities";
import application from "../constants/application";
import { isEmpty } from "lodash";
import uuid4 from "uuid4";
import { appConfig as config } from "../config/config";

export default async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (isEmpty(extractCookieFromRequest(req, "X-Request-Id")))
    req.headers["X-Request-Id"] = uuid4();
  res.header("X-Request-Id", req.headers["X-Request-Id"]);
  if (
    application.authorizationIgnorePath.indexOf(`${req.originalUrl}`) === -1
  ) {
    const authorizationHeader = extractCookieFromRequest(req, config.token);
    if (authorizationHeader) {
      const decoded = await verifyJwtToken(authorizationHeader);
      // @ts-ignore
      if (decoded) {
        //@ts-ignore
        req.user = decoded;
      } else {
        ApiError(res, httpStatusCodes.UNAUTHORIZED);
        return;
      }
    } else {
      ApiError(res, httpStatusCodes.FORBIDDEN);
      return;
    }
  }

  next();
};
