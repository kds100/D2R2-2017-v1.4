var frameModule = require("ui/frame");
var topmost = require("ui/frame").topmost;
var observableArray = require("data/observable-array");

function onPageLoaded(args) {
    // Nothing required at the moment
}

exports.onItemTap =  function(args){
    var index = args.index; 

    if(index == 1){
        var topmost = frameModule.topmost();
        topmost().navigate('views/html/html');
    }
}

exports.onPageLoaded = onPageLoaded;

function onBack(args) {

    topmost().navigate("pages/about/about");
 
}

exports.onBack = onBack;