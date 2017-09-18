var observableModule = require("data/observable")
var ObservableArray = require("data/observable-array").ObservableArray;

// ######################
// Family Ride = 16 miles
// ######################

global.myride = {
    ridecue: new ObservableArray([{
            "cue": "Still a mystery..",
            "total": "",
            "BLANK": 3,
            "INSTR": ""
        },
        {
            "cue": "NOTE: At this point Mystery riders will have to use the paper cue sheets and maps.",
            "total": "",
            "BLANK": 3,
            "INSTR": ""
        }
    ])

}

module.exports = global.myride;