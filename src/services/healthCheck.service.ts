const healthCheck = async (reqData: any) => {
  try {
    return { data: "Jay Shree Ganesh", request: reqData };
  } catch (e) {
    throw e;
  }
};

export default {
  healthCheck,
};
