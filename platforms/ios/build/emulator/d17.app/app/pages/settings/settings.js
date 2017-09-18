var BasePage = require("../../shared/BasePage");
var topmost = require("ui/frame").topmost;
var Observable = require("data/observable").Observable;
var TextField = require("ui/text-field");

var createUserModel = require("../../models/user-model").createUserModel;
var onSave = require("../../models/user-model").onSave;
var listPickerSelectedValue;


var SettingsPage = function () {

};

SettingsPage.prototype = new BasePage();
SettingsPage.prototype.constructor = SettingsPage;

// Place any code you want to run when the page loads here.
SettingsPage.prototype.pageLoaded = function (args) {
  var page = args.object;
  page.bindingContext = createUserModel();

  // Listen for changes to the Ride from the pick listß
  page.getViewById("ridePicker").addEventListener(
    Observable.propertyChangeEvent,
    function (e) {
      if (e.propertyName == "selectedIndex") {
        page.bindingContext.rideselection = page.bindingContext.rideoptions[e.value];
        listPickerSelectedValue = e.value;

      }
    }
  );
}

SettingsPage.prototype.save = function (args) {
  var page = topmost().currentPage;

  // var sender = args.object;
  // var parent = sender.parent;
  // var selIndex = page.getViewById(parent, "ridePicker").selectedIndex;
  // var selValue = page.getViewById(parent, "ridePicker").rideoptions[selIndex];

  // This used to work!
  var selIndex = page.getViewById("ridePicker").selectedIndex;
  var selValue = page.bindingContext.rideoptions[page.getViewById("ridePicker").selectedIndex];
  //console.log("Values are " + selIndex + "  " + selValue);

  //console.dir(page);
  // Save First Name, Last Name, ListPicker Selected Value (Integer), ListPicker Select Value (Textß)
  var tempSave = onSave(selIndex, selValue);
  var page = topmost().currentPage;
  topmost().navigate("pages/home/home");
}

module.exports = new SettingsPage();