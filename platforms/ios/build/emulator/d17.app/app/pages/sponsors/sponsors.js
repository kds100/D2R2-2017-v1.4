var BasePage = require("../../shared/BasePage");
var topmost = require("ui/frame").topmost;
var Observable = require("data/observable").Observable;
var observableArrayModule = require("data/observable-array");
var labelModule = require("ui/label");
var frameModule = require("ui/frame");

var fs = require("file-system");
// var observableArray = require("data/observable-array");
  //var array = new Observable.ObservableArray();

//   array.push({title: "About the D2R2"});
//   array.push({title: "RIDE!"});
//   array.push({title: "Change Settings"});


var SponsorPage = function() {
    //var colors = ["red", "brown","green2","white","blue","yellow"];
    var sponsorList = ['AAA', 'Diemand Farm', 'Peoples Pint','Real Pickles','The Landmark Trust','Yankee Candle Village'];
    var arraySponsor = new observableArrayModule.ObservableArray(sponsorList);
    //console.log("ARRAY SET -- Sponsor");
      //this.viewModel.set("blackBackground", true);

    //var arraySponsor = new observableArrayModule.ObservableArray(sponsorList);
    this.viewModel.set("sponsors", arraySponsor);

};

SponsorPage.prototype = new BasePage();
SponsorPage.prototype.constructor = SponsorPage;

// var listView = new listViewModule.ListView();
// var colors = ["red", "green", "blue"];
//  
// listView.on(listViewModule.ListView.itemLoadingEvent, function (args: listViewModule.ItemEventData) {
//     if (!args.view) {
//         // Create label if it is not already created.
//         args.view = new labelModule.Label();
//     }
//     //(<labelModule.Label>args.view).text = colors[args.index];

// });

SponsorPage.prototype.onItemTap = function(args) {
  //var page = topmost().currentPage;
  var tappedView = args.view;
        //the View will have a bindingContext 
        // set to the individual item from the list
 var tappedItem = tappedView.bindingContext;

//var myindex = page.getViewById("ListView").index;
//console.log("TAPPED LIST ITEM" + tappedItem);
//if(tappedItem == 'start'){
    //var topmost = frameModule.topmost();
    //var myPage = topmost.currentPage;
    //var documents = fs.knownFolders.documents();
    
// WORKING Navigation from this point
//topmost().navigate("pages/about/stub1");

    //console.log('Page = ' + normalizedPath);
    //topmost.navigate('stub1');
//}

//Instead of IF, try using Name and swap spaces
// for dashes
var pathWithDash = tappedItem.replace(" ", "-");

try {
    topmost().navigate("pages/sponsors/" + pathWithDash);
} catch (error) {
    alert("Error - Unable to locate page");
}
//console.log('Path would be '+pathWithDash);
}

module.exports = new SponsorPage();


// function pageLoaded(args) {
//   var page = args.object;
//   var array = new observableArray.ObservableArray();

//   array.push({title: "About the D2R2"});
//   array.push({title: "RIDE!"});
//   array.push({title: "Change Settings"});

//   page.bindingContext = {myItems: array};

//   console.log("PAGE LOAD ABOUT");
// }