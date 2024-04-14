const winston = require("winston");
import moment from "moment";

class LoggerService {
  private route: string;
  private log_data: string | undefined;
  private logger: any;
  constructor(route: string) {
    this.route = route;
    this.logger = winston.createLogger({
      transports: [new winston.transports.Console()],
      format: winston.format.printf((info: { message: any; obj: any }) => {
        let message = `Timestamp:${moment().format("YYYY-MM-DD HH:mm:ss")} | `;
        message = message + `${route}.log | ${info.message}`;
        message = info.obj
          ? message + `| data:${JSON.stringify(info.obj)} | `
          : message;
        message = this.log_data
          ? message + `log_data:${JSON.stringify(this.log_data)} | `
          : message;
        return message;
      }),
    });
  }

  async info(requestId: string, message: string, obj: any) {
    message = requestId ? `Request-id:${requestId} | ` + message : message;
    this.logger.log("info", message, { obj });
  }

  async http(obj: string) {
    this.logger.log("info", obj);
  }

  async error(requestId: string, message: string, obj: any) {
    message = requestId ? `Request-id:${requestId} | ` + message : message;
    this.logger.log("error", message, {
      obj,
    });
  }
}

export default LoggerService;
