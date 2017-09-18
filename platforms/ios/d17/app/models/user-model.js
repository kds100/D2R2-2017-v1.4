var Observable = require("data/observable").Observable;
var observableArrayModule = require("data/observable-array");
var imageModule = require("tns-core-modules/ui/image");
var fs = require('file-system');
//var Kinvey = require('kinvey-nativescript-sdk').Kinvey;

function createUserModel() {

    // Integrate KINVEY user control and data support
    // var user = Kinvey.User.getActiveUser();
    // // Check 
    // if (user) {
    //     var status = user.data.username;
    // }

    // Get the Active User (if connected)
    //var activeUser = Kinvey.User.getActiveUser();

    var rideLength = localStorage.getItem('ridelength');
    var rideIndex = localStorage.getItem('rideindex');
    //var activeUser = typeof rideLength !== 'undefined';

    var activeUser = ((typeof rideLength !== "undefined") && (rideLength !== null));

    console.log("CREATE values " + rideLength + "  " + rideIndex + " Active " + activeUser);
    // Given a connection, set up Model with application data
    // if (!activeUser) {
    //     // No User logged in, assign blanks as needed
    //     // viewModel.firstname = "No";
    //     // viewModel.lastname = "User";
    //     viewModel.rideselectedindex = 0;
    //     viewModel.rideselection = "180K";
    //     viewModel.jsonfile = "180K";
    //     viewModel.mapfile = "180K";
    // } else {
    // Set up Kinvey User data to viewModel
    // Create a model, assign data
    var viewModel = new Observable();
    try {
        //var userData = activeUser.metadata.emailVerification;
        // Note - not all User elements came across for Kinvey
        // File support ticket
        // viewModel.email = activeUser.data.username;
        // viewModel.rideselection = activeUser.data.ride;
        if (!activeUser) {
            viewModel.rideselection = "180K";
            console.log("NO ACTIVE USER, set to 180K");
        } else {
            viewModel.rideselection = rideLength;
        }

        // Not yet certain of Kinvey return of values, so hard code until verified
        viewModel.rideoptions = ["180K", "170K Mystery", "160K", "115K", "100K", "100K Mystery", "40 Mile Tour", "12 Mile Family Ride"];
        viewModel.ridefile = ["180K", "170KMystery", "160K", "115K", "100K", "100KMystery", "40MileTour", "16MileFamilyRide"];
        viewModel.rideselectedindex = viewModel.rideoptions.indexOf(viewModel.rideselection);

        //console.dir(viewModel);


        viewModel.jsonfile = viewModel.ridefile[viewModel.rideselectedindex] + 'json';

        viewModel.mapfile = '~/shared/maps/' + viewModel.ridefile[viewModel.rideselectedindex] + '.png';

        // Set up the CUE SHEET
        viewModel.cue = new observableArrayModule.ObservableArray([]);
        viewModel.cue = {};
        var jsonData;
        var RideJSON = require('../shared/' + viewModel.jsonfile);
        viewModel.cue = global.myride;

        // Set the App title to show currently selected ride (can be changed at any time)
        viewModel.titletext = 'D2R2 - ' + viewModel.rideoptions[viewModel.rideselectedindex];

        // Add Handling for Map Image file
        var image = new imageModule.Image();
        // this did not work..
        //var imageSource = imageSourceModule.fromResource(viewModel.mapfile); 
        //image.imageSource = "res://" + viewModel.mapfile;

        // Build a link to the resource map image based on selected ride
        image.imageSource = "res://" + viewModel.mapfile;
        viewModel.mapimagesource = image.imageSource;

    } catch (error) {
        alert(error);

    }
    //}

    // Set up Kinvey data
    //var dataStore = Kinvey.DataStore.collection('RideList', Kinvey.DataStoreType.Network);

    return viewModel;
};

function onSave(rideindex, rideValue) {

    //console.log("saving " + rideValue + ", " + rideindex);
    // Save the Riders selected Ride Length
    localStorage.setItem('ridelength', rideValue);
    localStorage.setItem('rideindex', rideindex);
    // Update the active users’ age.
    // Promise.resolve(Kinvey.User.getActiveUser())
    //     .then(function(user) {
    //         if (user) {
    //         return user.update({
    //             ride: rideValue
    //         });
    //         }
    //         return user;
    //     })
    //     .then(function(user) {
    //         // ...
    //         console.log("Unknown update");
    //     })
    //     .catch(function(error) {
    //         // ...
    //         console.log('Unable to set RIDE LEN');
    //     });

    // if (typeof ride === 'undefined') {
    //     //console.log('Ride Select NOT SET');
    //     //viewModelRef.titletext = 'D2R2 - Use Settings';
    // } else {
    //     var ridestr = ride; 


    // }

};

function onTest() {
    //var viewModel = new Observable();
    // viewModel.firstname = localStorage.getItem("firstname");
    // viewModel.lastname = localStorage.getItem("lastname");
    // viewModel.rideselection = localStorage.getItem("rideselection");
    // console.log("Data Stored is ###>"  + viewModel.firstname + " " + viewModel.lastname + ", " + viewModel.rideselection);
    //console.log("Data Stored is ###>"  + localStorage.getItem("firstname") + " " + localStorage.getItem("lastname") + ", " + localStorage.getItem("rideselection"));
    //console.log("Data Stored is ###>"  + localStorage.getItem("jsonfile") + ", " + localStorage.getItem("mapfile"));

    //console.log("CUE SHEET " + localStorage.getItem("cue"));


    //     let documentsFolder = fs.knownFolders.documents();
    // let currentAppFolder = fs.knownFolders.currentApp();
    // let tempFolder = fs.knownFolders.temp();

    // let testPath = "///test.txt";
    // // Get a normalized path such as <folder.path>/test.txt from <folder.path>///test.txt
    // this.documents = fs.path.normalize(documentsFolder.path + testPath);
    // this.currentApp = fs.path.normalize(currentAppFolder.path + testPath);
    // this.temp = fs.path.normalize(tempFolder.path + testPath);

    //console.log("curent path = " + this.currentApp);
};

exports.createUserModel = createUserModel;
exports.onSave = onSave;
exports.onTest = onTest;