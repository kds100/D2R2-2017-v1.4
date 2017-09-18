var application = require("application");

// NOTE - Kinvey was in use for storage and push notifications.  
//
// Ultimately there was an issue with Kinvey not functioning when user was out of cell range.
// Given the timeline, it was not possible to sort out this issue prior to the ride day.
// Kinvey was therefore commented out of this code.

// The next release will feature Kinvey sign on for storage and push abilities.


//var Kinvey = require('kinvey-nativescript-sdk').Kinvey;

// Get reference to the push plugin module.
//var pushPlugin = require('nativescript-push-notifications');


// Connect to the D2R2 Kinvey services
// Kinvey.init({
//   appKey: 'HIDDEN',
//   appSecret: 'HIDDEN'
// });

// Test connection to Kinvey backend services at startup

// Add code to alert user in cases where no connection exists and they haven't 
// already connected and logged in (that will stay put once done)
// Kinvey.ping()
//   .then(function (response) {
//     console.log('Kinvey Ping Success. Kinvey Service is alive, version: ' + response.version + ', response: ' + response.kinvey);

//     var dataStore = Kinvey.DataStore.collection('users');

//     var subscription = dataStore.find()
//       .subscribe(function (entities) {
//         console.log("User is " + entities._kmd);
//       }, function (error) {
//         console.log("ERR");
//       }, function () {
//         console.log("unknown");
//       });


//   })
//   .catch(function (error) {
//     console.log('Kinvey Ping Failed. Response: ' + error.description);
//   });

//#########################################################
// var Push = require('kinvey-nativescript-sdk/push').Push;
// var promise = Push.register({
//   android: {
//     senderID: '<Sender ID>'
//   },
//   ios: {
//     alert: true,
//     badge: true,
//     sound: true
//   }
// })
//   .then(function(deviceToken) {
//     console.log('Device TOKEN = ' + deviceToken.appKey);
//   })
//   .catch(function(error) {
//     console.log('Push error ' + error);
//   });

// console.log('### Past PUSH code');

application.start({
  moduleName: "pages/home/home"
});
