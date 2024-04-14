import axios, { AxiosRequestConfig } from "axios";

export const HttpClient = async (
  method: string,
  url: string,
  options: any
): Promise<any> => {
  const config: AxiosRequestConfig = {
    method: method,
    url: url,
    responseType: "json",
    maxBodyLength: Infinity,
    params: options.params || {},
    headers: options.headers || {},
  };
  if (options.data) {
    config.data = options.data;
  }
  try {
    const response = await axios(config);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Something went wrong !!");
    }
  } catch (error) {
    throw error;
  }
};
