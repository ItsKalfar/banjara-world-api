import bcrypt from "bcrypt";

export const generateHash = async (
  password: string,
  saltRounds: number
): Promise<string> => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(
      password,
      saltRounds,
      (err: Error | undefined, hash: string) => {
        if (!err) {
          resolve(hash);
        } else {
          reject(err);
        }
      }
    );
  });
};

export const verifyPassword = async (
  password: string,
  hashPassword: string
): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(
      password,
      hashPassword,
      (err: Error | undefined, result: boolean) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    );
  });
};
