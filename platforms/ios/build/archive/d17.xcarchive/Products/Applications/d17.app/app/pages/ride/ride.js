var BasePage = require("../../shared/BasePage");
var topmost = require("ui/frame").topmost;

var layout = require("ui/layouts/grid-layout");
var gestures = require("ui/gestures");
var frameModule = require("ui/frame");

var listViewModule = require("ui/list-view");
var labelModule = require("ui/label");
var observableArrayModule = require("data/observable-array");
var createUserModel = require("../../models/user-model").createUserModel;

var fs = require('file-system');
var view = require("ui/core/view");
var gestures = require("ui/gestures");
var Observable = require("data/observable").Observable;

var RidePage = function () {

};


function onNavigatingTo(args) {

  var page = args.object;
  // Load Module, create user data set
  page.bindingContext = createUserModel();

}


RidePage.prototype = new BasePage();
RidePage.prototype.constructor = RidePage;

// Place any code you want to run when the home page loads here.
RidePage.prototype.onPageLoad = function (args) {

  page = args.object;
  page.bindingContext = createUserModel();


  var onTap = function (eventData) {
    console.log("Hello World!");
  };

 
}


RidePage.prototype.onCheckChange = function (args) {

  //console.log(args.propertyName + " has been changed and the new value is: " + args.value);
}


RidePage.prototype.onItemTap = function (args) {

  var sender = args.object;
  var parent = sender.parent;
  ridelistview = view.getViewById(parent, "ridelist");

  // Changing color is complex for listview, revisit
  var gridLayout = args.view;
  var bindingCtx = gridLayout.bindingContext;
  bindingCtx.isSelected = !bindingCtx.isSelected;

  ridelistview.refresh();
}

module.exports = new RidePage();

exports.onItemTap = function (args) {

  //console.log('ITEM IS ' + args.index);
}

exports.onCheckChange = function (args) {

  //console.log('ITEM IS ' + args.index);
}

exports.onMapTap = function (args) {

  //console.log('ITEM IS ' + args.index);
}
