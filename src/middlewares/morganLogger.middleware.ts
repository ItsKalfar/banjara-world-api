import morgan, { StreamOptions } from "morgan";
import logger from "../config/logger";
const Logger = new logger("HTTP");

const stream: StreamOptions = {
  write: (message: any) => Logger.http(message),
};

const skip = () => {
  const env = process.env.NODE_ENV || "development";
  return env !== "development";
};

// Build the morgan middleware
const morganMiddleware = morgan(
  "Request-id :res[X-Request-Id] | :method :url :status :res[content-length] - :response-time ms",
  { stream, skip }
);

export default morganMiddleware;
