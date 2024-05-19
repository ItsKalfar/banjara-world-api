const env = process.env;

export const appConfig = {
  env: env.ENV || "beta",
  token: env.token || "x-token",
  MYSQLDB: {
    host: "srv788.hstgr.io",
    user: "u739708347_banjara",
    password: "dahbej-kancez-9hoHfy",
    database: "u739708347_banjaradb",
    //timezone: 'utc'
  },
  JwtToken: {
    secretKey: env.JWT_TOKEN_SECRET_KEY || "my_secret_key",
    expiry: env.JWT_TOKEN_EXPIRY || "5d",
  },
  MAIL: {
    host: env.MAIL_HOST || "smtp.gmail.com",
    user: env.MAIL_USER || "",
    password: env.MAIL_PASSWORD || "",
    from: env.MAIL_FROM || "",
    reply: env.MAIL_REPLY_TO || "",
  },
  AWS_S3: {
    s3bucketName: env.AWS_S3_BUCKET_NAME || "",
    s3Region: env.AWS_S3_REGION || "",
    s3accessKey: env.AWS_S3_ACCESSKEY || "",
    s3secreateKey: process.env.AWS_S3_SECREATEKEY || "",
    s3BaseURL: process.env.AWS_BASE_URL || "",
  },
  OPENAI: {
    apiKey: env.OPEN_AI_API_KEY || ""
  }
};
