var observableModule = require("data/observable")
var ObservableArray = require("data/observable-array").ObservableArray;

// ######################
// Family Ride = 40 miles
// ######################

global.myride = {
    ridecue: new ObservableArray([{
            "cue": "OUTBOUND to Green River Covered Bridge: 23 miles with a general trend uphill",
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
            "INSTR": "Leave starting area by turning RIGHT (north) onto Mill Village Rd"
        },
        {
            "cue": 0.6,
            "total": 0.6,
            "BLANK": 1,
            "INSTR": "Bear LEFT onto Old Main St"
        },
        {
            "cue": 0.4,
            "total": 1.0,
            "BLANK": 1,
            "INSTR": "LEFT onto Boyden Lane"
        },
        {
            "cue": 0.0,
            "total": 1.0,
            "BLANK": 1,
            "INSTR": "Immediate LEFT onto Old Albany Rd (onto Academy campus)"
        },
        {
            "cue": 0.3,
            "total": 1.3,
            "BLANK": 1,
            "INSTR": "End of street, go RIGHT around building, down past track"
        },
        {
            "cue": 0.8,
            "total": 2.1,
            "BLANK": 1,
            "INSTR": "RIGHT turn up the rows of corn!  No sign, just follow the dirt road."
        },
        {
            "cue": 0.3,
            "total": 2.4,
            "BLANK": 1,
            "INSTR": "Continue straight onto Main St (paved)"
        },
        {
            "cue": 0.1,
            "total": 2.5,
            "BLANK": 1,
            "INSTR": "T-intersection, LEFT onto Route 5 north"
        },
        {
            "cue": 2.7,
            "total": 5.2,
            "BLANK": 1,
            "INSTR": "LEFT onto Mill St, the light just before RR overpass (becomes River St)"
        },
        {
            "cue": 0.7,
            "total": 5.9,
            "BLANK": 1,
            "INSTR": "RIGHT at light onto Route 2A East"
        },
        {
            "cue": 0.1,
            "total": 6.0,
            "BLANK": 1,
            "INSTR": "Quick LEFT onto Solon St"
        },
        {
            "cue": 0.1,
            "total": 6.1,
            "BLANK": 1,
            "INSTR": "LEFT at next light onto Colrain St"
        },
        {
            "cue": 0.4,
            "total": 6.5,
            "BLANK": 1,
            "INSTR": "Fork RIGHT (just before bridge) onto Riverside Dr"
        },
        {
            "cue": 0.1,
            "total": 6.6,
            "BLANK": 1,
            "INSTR": "LEFT onto bike path"
        },
        {
            "cue": 0.9,
            "total": 7.5,
            "BLANK": 1,
            "INSTR": "End of bike path, RIGHT onto Nash's Mill Rd"
        },
        {
            "cue": 0.4,
            "total": 7.9,
            "BLANK": 1,
            "INSTR": "T intersection, LEFT onto Leyden Rd"
        },
        {
            "cue": 2.8,
            "total": 10.7,
            "BLANK": 1,
            "INSTR": "LEFT onto Eunice Williams Dr (a short way after sign for Camp Kee-wanee). Note that the routes diverge. Don't follow riders straight up Leyden Rd."
        },
        {
            "cue": 0.7,
            "total": 11.4,
            "BLANK": 1,
            "INSTR": "T intersection, RIGHT onto Green River Road"
        },
        {
            "cue": 1.0,
            "total": 12.4,
            "BLANK": 1,
            "INSTR": "Note that the routes intersect. Don't follow riders left up Nelson Rd"
        },
        {
            "cue": 4.0,
            "total": 16.4,
            "BLANK": 1,
            "INSTR": "Pavement - continue straight on Green River Rd.\nNote that routes diverge. Don't follow riders over bridge up West Leyden Rd."
        },
        {
            "cue": 0.0,
            "total": 16.4,
            "BLANK": 1,
            "INSTR": "Continue on Green River Rd after water stop. \nNote that the routes diverge. Don't follow riders over West Leyden Rd bridge."
        },
        {
            "cue": 0.1,
            "total": 16.5,
            "BLANK": 1,
            "INSTR": "RIGHT on North Green River Rd"
        },
        {
            "cue": 0.0,
            "total": 16.5,
            "BLANK": 1,
            "INSTR": "WATER STOP on left. Note that routes diverge. Don't follow riders turning around after water stop."
        },
        {
            "cue": 4.8,
            "total": 21.3,
            "BLANK": 1,
            "INSTR": "LEFT onto Jelly Mill Rd (skip this turn if you want to avoid the climb)"
        },
        {
            "cue": 1.5,
            "total": 22.8,
            "BLANK": 1,
            "INSTR": "T-intersection, RIGHT onto Jacksonville Stage Rd"
        },
        {
            "cue": 0.6,
            "total": 23.4,
            "BLANK": 1,
            "INSTR": "Green River Covered Bridge. Checkpoint open until 4PM."
        },

        {
            "cue": "RETURN to Old Deerfield: 22 miles with a general trend downhill",
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
            "total": 23.4,
            "BLANK": 1,
            "INSTR": "Return south along River Rd ( follow river downstream, do not cross bridge)"
        },
        {
            "cue": 1.3,
            "total": 24.7,
            "BLANK": 1,
            "INSTR": "Continue STRAIGHT onto North Green River Rd (pavement)"
        },
        {
            "cue": 4.8,
            "total": 29.5,
            "BLANK": 1,
            "INSTR": "WATER STOP on right."
        },
        {
            "cue": 0.0,
            "total": 29.5,
            "BLANK": 1,
            "INSTR": "LEFT onto Green River Rd"
        },
        {
            "cue": 0.1,
            "total": 29.6,
            "BLANK": 1,
            "INSTR": "Continue straight on Green River Rd (becomes dirt).\nNote that routes diverge. Don't follow riders over bridge up West Leyden Rd."
        },
        {
            "cue": 4.0,
            "total": 33.6,
            "BLANK": 1,
            "INSTR": "Note that the routes diverge. Don't follow riders right up Nelson Rd"
        },
        {
            "cue": 3.8,
            "total": 37.4,
            "BLANK": 1,
            "INSTR": "Stop sign, STRAIGHT onto Colrain Rd."
        },
        {
            "cue": 0.9,
            "total": 38.3,
            "BLANK": 1,
            "INSTR": "LEFT at rotary, Colrain St., crossing over I-91"
        },
        {
            "cue": 0.3,
            "total": 38.6,
            "BLANK": 1,
            "INSTR": "Next RIGHT, Woodard Rd."
        },
        {
            "cue": 0.4,
            "total": 39.0,
            "BLANK": 1,
            "INSTR": "Stop sign, LEFT onto Shelburne Rd"
        },
        {
            "cue": 0.3,
            "total": 39.3,
            "BLANK": 1,
            "INSTR": "STRAIGHT at light across Route 2A onto River St"
        },
        {
            "cue": 0.1,
            "total": 39.4,
            "BLANK": 1,
            "INSTR": "RIGHT onto Laurel St"
        },
        {
            "cue": 0.4,
            "total": 39.8,
            "BLANK": 1,
            "INSTR": "LEFT onto Fairview St E (behind horse track)"
        },
        {
            "cue": 0.4,
            "total": 40.2,
            "BLANK": 1,
            "INSTR": "Stop sign, RIGHT onto Wisdom Way"
        },
        {
            "cue": 0.6,
            "total": 40.8,
            "BLANK": 1,
            "INSTR": "LEFT onto Lower Rd (before you cross I-91)"
        },
        {
            "cue": 3.9,
            "total": 44.7,
            "BLANK": 1,
            "INSTR": "T intersection, LEFT onto Upper Rd, over bridge"
        },
        {
            "cue": 0.1,
            "total": 44.8,
            "BLANK": 1,
            "INSTR": "T intersection, LEFT onto Stillwater Rd"
        },
        {
            "cue": 1.0,
            "total": 45.8,
            "BLANK": 1,
            "INSTR": "T intersection, LEFT onto Mill Village Rd"
        },
        {
            "cue": 1.0,
            "total": 46.8,
            "BLANK": 1,
            "INSTR": "FINISH at registration tent - be sure to CHECK IN by 7PM"
        },
        {
            "cue": "",
            "total": "",
            "BLANK": 3,
            "INSTR": "Please CHECK IN so we know you are back safely."
        }
    ])

}

module.exports = global.myride;