import fs from "fs";
import { S3 } from "aws-sdk";
import { appConfig as config } from "../config/config";
const mime = require("mime-types");

interface FileData {
  file: {
    type?: string | null;
    name: string;
    path: string;
    mime_type?: string;
  };
}

const client = new S3({
  region: config.AWS_S3.s3Region,
  accessKeyId: config.AWS_S3.s3secreateKey,
  secretAccessKey: config.AWS_S3.s3accessKey,
});

const bucketName = config.AWS_S3.s3bucketName;
const s3BaseURL = config.AWS_S3.s3BaseURL;

export const uploadFilestreamToS3 = async (data: FileData) => {
  if (data.file.type === undefined || data.file.type === null)
    data.file.type = "";
  const fileStream = fs.createReadStream(data.file.path);
  try {
    await client
      .putObject({
        Bucket: bucketName,
        Key: data.file.type + data.file.name,
        ContentType: mime.lookup(data.file.path),
        Body: fileStream,
      })
      .promise();
    return { url: s3BaseURL + data.file.type + data.file.name };
  } catch (e) {
    throw e;
  }
};

export const FilestreamToS3 = async (data: FileData) => {
  if (data.file.type === undefined || data.file.type === null)
    data.file.type = "";
  try {
    const fileStream = fs.createReadStream(data.file.path);
    await client
      .putObject({
        Bucket: bucketName,
        Key: data.file.type + data.file.name,
        ContentType: data.file.mime_type,
        Body: fileStream,
      })
      .promise();
    return { url: s3BaseURL + data.file.type + data.file.name };
  } catch (e) {
    throw e;
  }
};
