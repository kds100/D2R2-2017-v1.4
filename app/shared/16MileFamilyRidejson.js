var observableModule = require("data/observable")
var ObservableArray = require("data/observable-array").ObservableArray;

// ######################
// Family Ride = 12 miles
// ######################

global.myride = {
    ridecue: new ObservableArray([{
            "cue": "This ride is essentially all done on Green River Rd: out and back.",
            "total": "",
            "BLANK": 3,
            "INSTR": ""
        },
        {
            "cue": "NOTE: The start is at intersection of Green River Rd and N Green River Rd in Colrain.",
            "total": "",
            "BLANK": 3,
            "INSTR": ""
        },
        {
            "cue": "From I-91 Exit 26, go west on Route 2,",
            "total": "",
            "BLANK": 3,
            "INSTR": ""
        },
        {
            "cue": "RIGHT on Colrain-Shelburne Rd,",
            "total": "",
            "BLANK": 3,
            "INSTR": ""
        },
        {
            "cue": "RIGHT on W. Leyden Rd,",
            "total": "",
            "BLANK": 3,
            "INSTR": ""
        },
        {
            "cue": "and continue to the intersection of Green River Rd",
            "total": "",
            "BLANK": 3,
            "INSTR": ""
        },
        {
            "cue": "Cue",
            "total": "Total",
            "BLANK": 1,
            "INSTR": "Direction"
        },
        {
            "cue": 0.0,
            "total": 0.0,
            "BLANK": 1,
            "INSTR": "START north on N Green River Rd"
        },
        {
            "cue": 6.1,
            "total": 6.1,
            "BLANK": 1,
            "INSTR": "LUNCH STOP. Park bikes off roadway. After lunch, reverse route back to start/finish."
        },
        {
            "cue": 6.1,
            "total": 12.2,
            "BLANK": 1,
            "INSTR": "FINISH at end of Plain Rd. Please CHECK IN so we know you are back safely."
        }
    ])

}

module.exports = global.myride;