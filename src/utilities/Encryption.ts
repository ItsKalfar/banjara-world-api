import jwt from "jsonwebtoken";
import { appConfig as config } from "../config/config";

export const generateJwtToken = (data: any): string => {
  return jwt.sign(data, config.JwtToken.secretKey, {
    expiresIn: config.JwtToken.expiry,
  });
};

export const verifyJwtToken = async (token: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    jwt.verify(
      token,
      config.JwtToken.secretKey,
      (err: jwt.VerifyErrors | null, decoded: any) => {
        if (err) {
          resolve(null);
        } else {
          resolve(decoded);
        }
      }
    );
  });
};
