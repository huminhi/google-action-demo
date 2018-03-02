const functions = require('firebase-functions');
const ActionsSdkApp = require('actions-on-google').ActionsSdkApp;

exports.actionDemo = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
})
