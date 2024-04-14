import admin from "firebase-admin";

admin.initializeApp({
  credential: admin.credential.cert("serviceAccount"),
});

const messaging = admin.messaging();

export const sendNotification = async (notificationBody: any): Promise<any> => {
  try {
    return await messaging.send(notificationBody);
  } catch (err) {
    return err;
  }
};
