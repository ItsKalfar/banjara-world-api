const base = "/api";

export default {
  url: {
    base,
  },
  timers: {},
  env: {},
  authorizationIgnorePath: [
    `${base}/healthCheck`,
    `${base}/sms/cronSMS`,
    `${base}/users/login`,
    `${base}/users/forgateUserPassword`,
    `${base}/customer/sign-in`,
    `${base}/customer/send-otp`,
    `${base}/customer/resend-otp`,
    `${base}/customer/verify-otp`,
  ],
};
