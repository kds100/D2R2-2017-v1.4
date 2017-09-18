var BasePage = require("../../shared/BasePage");
var Kinvey = require('kinvey-nativescript-sdk').Kinvey;
var view = require("ui/core/view");
var topmost = require("ui/frame").topmost;

var LoginPage = function () {};
LoginPage.prototype = new BasePage();
LoginPage.prototype.constructor = LoginPage;

module.exports = new LoginPage();
var frameModule = require("ui/frame");
var localStorage = require("nativescript-localstorage");

var Page;
var email;
var pw;

exports.pageLoaded = function (args) {
    // Get references to the Email and PW fields
    Page = args.object;
    email = page.getViewById("email");
    pw = page.getViewById("pw");
    // Pull any saved values from Local Storage
    // and put into the fields
    email.text = localStorage.getItem('email');
    pw.text = localStorage.getItem('pw');
};

exports.navigateTo = function (args) {
    //
};

exports.register = function () {
    // Not using REGISTER at this time
    email = page.getViewById("email");
    pw = page.getViewById("pw");

    Kinvey.User.login(email.text, pw.text)
        .then(function (user) {
            console.dump(user);
            console.log('logged in');
        })
        .catch(function (error) {
            console.log(error.message);
        });
};

LoginPage.prototype.signIn = function (args) {
    var sender = args.object;
    var parent = sender.parent;

    email = view.getViewById(parent, "email");
    pw = view.getViewById(parent, "pw");

    // login with KinveyAuth
    //
    var promise = Kinvey.User.login(email.text, pw.text)
        .then(function (user) {
            // Save Login Data locally for return trip
            localStorage.setItem('email', email.text);
            localStorage.setItem('pw', pw.text);
            // Now navigate to Home page based on successful login
            topmost().navigate("pages/home/home");
        })
        .catch(function (error) {
            // console.log("ERROR LOG IN : " + error.sourceURL);
            // console.dir(error);
            if (error.sourceURL == "file:///app/tns_modules/kinvey-nativescript-sdk/src/secure/secure.js") {
                // false login error due to new code - need Kinvey update?
                // Save Login Data locally for return trip
                localStorage.setItem('email', email.text);
                localStorage.setItem('pw', pw.text);
                // Now navigate to Home page based on successful login
                topmost().navigate("pages/home/home");
            } else {
                alert(error.message);
            }

        });

};

LoginPage.prototype.logout = function (args) {
    Kinvey.User.logout()
        .then(function () {
            // Logging out

        })
        .then(function (user) {
            console.log(user);
            var dialogs = require("ui/dialogs");
            dialogs.alert({
                title: "Logout",
                message: "The user has successfully logged out.",
                okButtonText: "ok"
            }).then(function () {
                // Dialog closed!
            });

            // logged out
        })
        .catch(function (error) {
            alert(error.message);
        });
}

LoginPage.prototype.signInMIC = function (args) {

    console.log('signInMIC');

    // login with MIC  (NOT USING CURRENTLY)
    //
    Kinvey.User.loginWithMIC('http://localhost:8100', Kinvey.AuthorizationGrant.AuthorizationCodeLoginPage, {
            version: 'v2'
        })
        .then(function (user) {
            console.log(user);
            topmost().navigate("pages/home/home");
        }).catch(function (error) {
            console.log(error);
        });

    //    
}

module.exports = new LoginPage();