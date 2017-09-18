var BasePage = require("../../shared/BasePage");
var topmost = require("ui/frame").topmost;
var layout = require("ui/layouts/grid-layout");
var gestures = require("ui/gestures");
var listViewModule = require("ui/list-view");
var labelModule = require("ui/label");
var observableArrayModule = require("data/observable-array");

var fs = require('file-system');

var view = require("ui/core/view");
//var Kinvey = require('kinvey-nativescript-sdk').Kinvey;

require("nativescript-dom");  //var dom = 

var platform = require("platform");
//var screenmetrics = require("platform/screenmetrics");

var allridesmap = function() {
};

//Global values to store 
// hei


allridesmap.prototype = new BasePage();
allridesmap.prototype.constructor = allridesmap;


allridesmap.prototype.navigatedTo = function(args) {
    var page = args.object;
    var maplayout = page.getViewById("maplayout");
    // console.log("stack.getMeasuredHeight: " + maplayout.getMeasuredHeight());
    // console.log("stack.getMeasuredWidth: " + maplayout.getMeasuredWidth());
    var stackH = maplayout.getMeasuredHeight();
    var stackW = maplayout.getMeasuredWidth();

    let screenScale = platform.screen.mainScreen.scale;
    // console.log("######### scale = " + screenScale);
    
    heightDP = stackH / screenScale;
    widthDP = stackW/ screenScale;
    // console.log("heightDP: " + heightDP);
    // console.log("widthDP: " + widthDP);
}


// Place any code you want to run when the home page loads here.
allridesmap.prototype.pageLoaded = function(args) {

    var page = args.object;

    let screenScale = platform.screen.mainScreen.scale;
    var maplayout = page.getViewById("maplayout");
    var item = page.getElementsByTagName('Button')[0];

    maplayout.on("pan", function (args) {
        if (args.state === 1) {
            prevDeltaX = 0;
            prevDeltaY = 0;
        }
        else if (args.state === 2) {
            item.translateX += args.deltaX - prevDeltaX;
            item.translateY += args.deltaY - prevDeltaY;
    
            prevDeltaX = args.deltaX;
            prevDeltaY = args.deltaY;
        }
    
    })


    maplayout.on("pinch", function (args) {

        //console.log("State: " + args.state + " scale: " + args.scale + " focusX: " + args.getFocusX() + " focusY: " + args.getFocusY());


        if (args.state === 1) {
            const newOriginX = args.getFocusX() - item.translateX;
            const newOriginY = args.getFocusY() - item.translateY;
    
            const oldOriginX = item.originX * item.getMeasuredWidth();
            const oldOriginY = item.originY * item.getMeasuredHeight();
    
            item.translateX += (oldOriginX - newOriginX) * (1 - item.scaleX);
            item.translateY += (oldOriginY - newOriginY) * (1 - item.scaleY);
    
            item.originX = newOriginX / item.getMeasuredWidth();
            item.originY = newOriginY / item.getMeasuredHeight();
    
            startScale = item.scaleX;
        }
    
        else if (args.scale && args.scale !== 1) {
            let newScale = startScale * args.scale;
            newScale = Math.min(8, newScale);
            newScale = Math.max(0.125, newScale);
    
            item.scaleX = newScale;
            item.scaleY = newScale;
        }

        // Btn.width = Btn.width * args.scale;
        // Btn.height = Btn.height * args.scale;
        // console.log("Scale is :" + args.scale);

        // if(Btn.width <= widthDP){
        //     Btn.width = widthDP;
        //     Btn.height = heightDP;
        // }
    })

}



allridesmap.prototype.onItemTap = function(args){

}

module.exports = new allridesmap();

exports.onItemTap = function(args){

}

exports.onMapTap = function(args){

}

