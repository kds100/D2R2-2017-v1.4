var BasePage = require("../../shared/BasePage");
var topmost = require("ui/frame").topmost;
//var Kinvey = require('kinvey-nativescript-sdk').Kinvey;
var observableModule = require("data/observable");
var localStorage = require("nativescript-localstorage");

var HomePage = function () {};
HomePage.prototype = new BasePage();
HomePage.prototype.constructor = HomePage;

var source = new observableModule.Observable();

// Place any code you want to run when the home page loads here.
HomePage.prototype.contentLoaded = function (args) {

    // Check Kinvey for an Active User 
    //var activeUser = Kinvey.User.getActiveUser();

    // If No Active User present, attempt localstorage pull
    // and log in with stored value (if exists)
    // if (!activeUser) {
    //     // Check for stored user, login to Kinvey with stored data
    //     var email = localStorage.getItem('email');
    //     var pw = localStorage.getItem('pw');

    //     var promise = Kinvey.User.login(email, pw)
    //         .then(function(user) {
    //             // Do nothing, user is logged in and we are
    //             // already at the HOME page
    //         })
    //         .catch(function(error) {
    //             // Take user to Login page to sign in
    //             topmost().navigate("pages/login/login");
    //         });

    // }

    // Pull Ride List from Kinvey Baas
    // var dataStore = Kinvey.DataStore.collection('RideList', Kinvey.DataStoreType.Network);

    // // Pull List of Rides
    // var subscription = dataStore.find()
    //     .subscribe(function(entities) {
    //         console.log(entities);
    //         var page = args.object;
    //         page.bindingContext = { RideList: entities[0] };
    //     }, function(error) {
    //         console.log(error);
    //     }, function() {

    //     });

}

HomePage.prototype.settings = function (args) {
    // Stopped using a Settings button, but this executes if needed again
    topmost().navigate("pages/settings/settings");
}


module.exports = new HomePage();