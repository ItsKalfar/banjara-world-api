import * as bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import path from "path";
import application from "./constants/application";
import indexRoute from "./routes/index";
import authenticateMiddleware from "./middlewares/authenticate.middleware";
import morganMiddleware from "./middlewares/morganLogger.middleware";
import joiErrorHandlerMiddleware from "./middlewares/joiErrorHandler.middleware";
require("dotenv").config();

const app = express();

app.options("*", cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "DELETE, PUT, GET, POST");
  res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
  res.header("Expires", "-1");
  res.header("Pragma", "no-cache");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, token_access, user_id, User-agent"
  );
  res.header(
    "Cache-Control",
    "no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0"
  );
  next();
});

app.use(express.static(path.join(__dirname, "../public")));
app.use(bodyParser.json({ limit: "10mb" }));
app.use(morganMiddleware);
app.use(authenticateMiddleware);

// Router
app.use(application.url.base, indexRoute);

app.use(joiErrorHandlerMiddleware);

export default app;
