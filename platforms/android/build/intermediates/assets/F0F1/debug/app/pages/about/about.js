var BasePage = require("../../shared/BasePage");
var topmost = require("ui/frame").topmost;
var view = require("ui/core/view");
var observable = require("data/observable");
//var Kinvey = require('kinvey-nativescript-sdk').Kinvey;
var Frame = require("ui/frame");
var AboutPage = function () {};
AboutPage.prototype = new BasePage();
AboutPage.prototype.constructor = AboutPage;
var observableArray = require("data/observable-array");

// Place any code you want to run when the home page loads here.
AboutPage.prototype.contentLoaded = function (args) {

    var page = args.object;
    var array = new observableArray.ObservableArray();

    //var viewModel = new Observable();

    var entities = [{
        "_id": "597e975106bc9062522dbcf7",
        "pagename": "Courses",
        "pagejs": "Courses",
        "_acl": {
            "creator": "kid_B1l0WAVUW"
        },
        "imagepath": "res://courses",
        "pageicon": "&#f276;",
        "_kmd": {
            "lmt": "2017-08-08T18:04:26.710Z",
            "ect": "2017-07-31T02:34:57.485Z"
        }
    }, {
        "_id": "597e99d8a4ea80611360e83f",
        "pagename": "Start Times",
        "pagejs": "Start",
        "_acl": {
            "creator": "kid_B1l0WAVUW"
        },
        "imagepath": "res://start",
        "pageicon": "&#f017;",
        "_kmd": {
            "lmt": "2017-08-08T18:02:54.451Z",
            "ect": "2017-07-31T02:45:44.562Z"
        }
    }, {
        "_id": "597e99ec06bc9062522dcc39",
        "pagename": "Camping",
        "pagejs": "Camping",
        "_acl": {
            "creator": "kid_B1l0WAVUW"
        },
        "imagepath": "res://camping",
        "pageicon": "&#f185;",
        "_kmd": {
            "lmt": "2017-08-08T18:01:52.494Z",
            "ect": "2017-07-31T02:46:04.659Z"
        }
    }, {
        "_id": "597e99f9474ee5930b13bfff",
        "pagename": "Lodging",
        "pagejs": "Lodging",
        "_acl": {
            "creator": "kid_B1l0WAVUW"
        },
        "imagepath": "res://lodging",
        "pageicon": "&#xf236;",
        "_kmd": {
            "lmt": "2017-08-08T18:01:48.123Z",
            "ect": "2017-07-31T02:46:17.899Z"
        }
    }, {
        "_id": "597e9a1506bc9062522dcd8a",
        "pagename": "Directions",
        "pagejs": "Directions",
        "_acl": {
            "creator": "kid_B1l0WAVUW"
        },
        "imagepath": "res://directions",
        "pageicon": "&#f277;",
        "_kmd": {
            "lmt": "2017-08-08T18:01:43.899Z",
            "ect": "2017-07-31T02:46:45.491Z"
        }
    }, {
        "_id": "597e973d7a22936d357ee50c",
        "pagename": "About the D2R2",
        "pagejs": "About-D2R2",
        "_acl": {
            "creator": "kid_B1l0WAVUW"
        },
        "imagepath": "res://about-d2r2",
        "pageicon": "&#xf1e0;",
        "_kmd": {
            "lmt": "2017-08-09T02:39:50.235Z",
            "ect": "2017-07-31T02:34:37.646Z"
        }
    }]

    array.push(entities);
    page.bindingContext = {
        myItems: array
    };
    // var dataStore = Kinvey.DataStore.collection('AboutPages', Kinvey.DataStoreType.Network);
    // // load ABOUT data
    // //
    // var subscription = dataStore.find()
    //     .subscribe(function (entities) {
    //         var page = args.object;

    //         array.push(entities);
    //         page.bindingContext = {
    //             myItems: array
    //         };
    //     }, function (error) {
    //         console.log(error);
    //     }, function () {
    //         console.log('finished pulling ABOUT data');
    //     });

};

// AboutPage.prototype.refreshMe = function (args) {

//     var dataStore = Kinvey.DataStore.collection('AboutPages', Kinvey.DataStoreType.Network);
//     var stream = dataStore.find();
//     stream.subscribe(function onNext(entities) {

//         console.log(entities.length);

//         while (myItems.length > 0) {
//             myItems.pop();
//         }

//         for (i = 0; i < entities.length; i++) {

//             console.log(entities[i]);
//             myItems.push(entities[i]);
//         }

//     }, function onError(error) {
//         console.log(error);
//     }, function onComplete() {

//         console.log('AboutPages data fetch complete');
//     });
// };

AboutPage.prototype.onPageLoad = function (args) {
    var page = args.object;
    //console.dir(page.bindingContext);
};

AboutPage.prototype.onItemTap = function (args) {

    var tappedView = args.view;
    //the View will have a bindingContext 
    // set to the individual item from the list
    var tappedItem = tappedView.bindingContext;

    try {
        topmost().navigate("pages/about/" + tappedItem.pagejs);
    } catch (error) {
        alert("Error - Unable to locate page" + error);
    }
}

module.exports = new AboutPage();