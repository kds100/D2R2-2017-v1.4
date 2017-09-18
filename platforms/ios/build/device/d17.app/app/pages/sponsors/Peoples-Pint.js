var frameModule = require("ui/frame");
var topmost = require("ui/frame").topmost;
var observableArray = require("data/observable-array");

function onPageLoaded(args) {
}

exports.onItemTap =  function(args){
    // Get the Index selected
    var index = args.index; 
}

exports.onPageLoaded = onPageLoaded;

function onBack(args) {
    // Return to the ABOUT page with Listview
    topmost().navigate("pages/sponsors/sponsors");
}
exports.onBack = onBack;