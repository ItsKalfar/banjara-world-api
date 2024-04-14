import nodemailer from "nodemailer";
import { appConfig as config } from "../config/config";

export const transporter = nodemailer.createTransport({
  port: 465, // true for 465, false for other ports
  host: config.MAIL.host,
  service: "Gmail",
  requireTLS: true,
  auth: {
    user: config.MAIL.user,
    pass: config.MAIL.password,
  },
  secure: true,
});
