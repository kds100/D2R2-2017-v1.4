var observableModule = require("data/observable")
var ObservableArray = require("data/observable-array").ObservableArray;

// #####################
// 160 K
// #####################

global.myride = {
    ridecue: new ObservableArray([{
            "cue": "Stage 1: Deerfield to Green River Covered Bridge(27 miles)  10 easy paved miles, then a mile of climbing before some entertaining dirt roads.",
            "total": "",
            "BLANK": 3,
            "INSTR": ""
        },

        {
            "cue": "Cue",
            "total": "Total",
            "BLANK": 1,
            "INSTR": "Instruction"
        },
        {
            "cue": 0.0,
            "total": 0.0,
            "BLANK": 1,
            "INSTR": "Leave starting area by turning RIGHT (north) onto Mill Village Rd"
        },
        {
            "cue": 0.8,
            "total": 0.8,
            "BLANK": 1,
            "INSTR": "Bear LEFT onto Old Main St"
        },
        {
            "cue": 0.8,
            "total": 1.6,
            "BLANK": 1,
            "INSTR": "Bear RIGHT onto Main St at north end of Old Deerfield"
        },
        {
            "cue": 0.2,
            "total": 1.8,
            "BLANK": 1,
            "INSTR": "T-intersection, LEFT onto Route 5 north"
        },
        {
            "cue": 2.5,
            "total": 4.3,
            "BLANK": 1,
            "INSTR": "LEFT onto Mill St, the light just before RR overpass (becomes River St)"
        },
        {
            "cue": 0.8,
            "total": 5.1,
            "BLANK": 1,
            "INSTR": "STRAIGHT through lights onto Shelburne Rd"
        },
        {
            "cue": 0.3,
            "total": 5.4,
            "BLANK": 1,
            "INSTR": "Next RIGHT onto Woodard Rd"
        },
        {
            "cue": 0.4,
            "total": 5.8,
            "BLANK": 1,
            "INSTR": "T-intersection, RIGHT onto Colrain St"
        },
        {
            "cue": 0.0,
            "total": 5.8,
            "BLANK": 1,
            "INSTR": "LEFT just after bridge onto Riverside Dr"
        },
        {
            "cue": 0.1,
            "total": 5.9,
            "BLANK": 1,
            "INSTR": "Bear LEFT onto bike path"
        },
        {
            "cue": 1.0,
            "total": 6.9,
            "BLANK": 1,
            "INSTR": "End of bike path, RIGHT onto Nash's Mill Rd"
        },
        {
            "cue": 0.4,
            "total": 7.3,
            "BLANK": 1,
            "INSTR": "T-intersection, LEFT onto Leyden Rd / Conway St"
        },
        {
            "cue": 2.8,
            "total": 10.1,
            "BLANK": 1,
            "INSTR": "Note that the 115K route diverges, don't follow riders turning left"
        },
        {
            "cue": 1.7,
            "total": 11.8,
            "BLANK": 1,
            "INSTR": "Top of hill, fork LEFT onto South County Rd (not Lois Lane)"
        },
        {
            "cue": 0.6,
            "total": 12.4,
            "BLANK": 1,
            "INSTR": "RIGHT onto Cobbs Rd (no sign, just big maple trees)"
        },
        {
            "cue": 0.1,
            "total": 12.5,
            "BLANK": 1,
            "INSTR": "STRAIGHT (more of a zig-zag) across Greenfield Rd onto South Schoolhouse Rd"
        },
        {
            "cue": 0.8,
            "total": 13.3,
            "BLANK": 1,
            "INSTR": "Bend LEFT onto Glen Rd (other way is dead end)"
        },
        {
            "cue": 0.5,
            "total": 13.8,
            "BLANK": 1,
            "INSTR": "Bend RIGHT, still Glen Rd (no sign--big white house on left. other way is dead end)"
        },
        {
            "cue": 1.1,
            "total": 14.9,
            "BLANK": 1,
            "INSTR": "Bend RIGHT, still Glen Rd (other way is dead end)"
        },
        {
            "cue": 0.1,
            "total": 15.0,
            "BLANK": 1,
            "INSTR": "Paved T intersection, LEFT onto Eden Rd"
        },
        {
            "cue": 0.3,
            "total": 15.3,
            "BLANK": 1,
            "INSTR": "Continue STRAIGHT onto dirt, East Hill Rd - great views along here"
        },
        {
            "cue": 1.0,
            "total": 16.3,
            "BLANK": 1,
            "INSTR": "Stay to the left fork, still East Hill Rd"
        },
        {
            "cue": 0.9,
            "total": 17.2,
            "BLANK": 1,
            "INSTR": "CAUTION!  Really nasty, unmaintained downhill.  Consider walking in places."
        },
        {
            "cue": 0.4,
            "total": 17.6,
            "BLANK": 1,
            "INSTR": "Back to civilization - RIGHT onto Simon Keets Rd"
        },
        {
            "cue": 0.0,
            "total": 17.6,
            "BLANK": 1,
            "INSTR": "Immediate LEFT onto Keets Brook Rd"
        },
        {
            "cue": 1.0,
            "total": 18.6,
            "BLANK": 1,
            "INSTR": "Pavement.  LEFT onto Weatherhead Hollow Rd"
        },
        {
            "cue": 0.3,
            "total": 18.9,
            "BLANK": 1,
            "INSTR": "RIGHT onto Packer(s) Corner(s) Rd - pretty hard 1-mile climb"
        },
        {
            "cue": 1.5,
            "total": 20.4,
            "BLANK": 1,
            "INSTR": "RIGHT onto South Belden Hill Rd"
        },
        {
            "cue": 0.2,
            "total": 20.6,
            "BLANK": 1,
            "INSTR": "Continue STRAIGHT past red barns onto unmaintained road"
        },
        {
            "cue": 0.7,
            "total": 21.3,
            "BLANK": 1,
            "INSTR": "Stop sign at bottom of fast hill, LEFT onto Sweet Pond Rd"
        },
        {
            "cue": 2.8,
            "total": 24.1,
            "BLANK": 1,
            "INSTR": "Back to pavement; immediate LEFT onto (Jacksonville) Stage Rd.\nNote that the 115K route diverges. Don't follow riders straight onto Guilford Center Rd"
        },
        {
            "cue": 2.5,
            "total": 26.6,
            "BLANK": 1,
            "INSTR": "Straight across covered bridge at bottom of descent, rest stop on right."
        },
        {
            "cue": 0.0,
            "total": 26.6,
            "BLANK": 1,
            "INSTR": "Green River Covered Bridge. Open 10:30-16:00. Park bikes off road"
        },
 
        {
            "cue": "Stage 2: Green River Covered Bridge to Sadadda Rd(23 miles)  Lots of climbing on this stretch, with lunch waiting for you",
            "total": "",
            "BLANK": 3,
            "INSTR": ""
        },

        {
            "cue": "Cue",
            "total": "Total",
            "BLANK": 1,
            "INSTR": "Instruction"
        },
        {
            "cue": 0.0,
            "total": 26.6,
            "BLANK": 1,
            "INSTR": "Head back through covered bridge"
        },
        {
            "cue": 0.1,
            "total": 26.7,
            "BLANK": 1,
            "INSTR": "LEFT on Green River Rd"
        },
        {
            "cue": 1.9,
            "total": 28.6,
            "BLANK": 1,
            "INSTR": "T intersection, LEFT onto Hinesburg Rd (no sign)"
        },
        {
            "cue": 1.1,
            "total": 29.7,
            "BLANK": 1,
            "INSTR": "STRAIGHT onto pavement, becomes Green River Rd again (no sign)"
        },
        {
            "cue": 5.0,
            "total": 34.7,
            "BLANK": 1,
            "INSTR": "Top of paved climb, STRAIGHT onto Hatch School Rd (dirt, no sign)"
        },
        {
            "cue": 0.1,
            "total": 34.8,
            "BLANK": 1,
            "INSTR": "RIGHT onto Butterfield Rd"
        },
        {
            "cue": 2.4,
            "total": 37.2,
            "BLANK": 1,
            "INSTR": "LEFT onto Grant Rd just after big white colonial house"
        },
        {
            "cue": 2.0,
            "total": 39.2,
            "BLANK": 1,
            "INSTR": "T intersection, RIGHT onto Shearer Hill Rd (sign missing from post)"
        },
        {
            "cue": 1.1,
            "total": 40.3,
            "BLANK": 1,
            "INSTR": "Pavement; hairpin LEFT onto Parsons Rd (sometimes listed as Bershera Hill)"
        },
        {
            "cue": 2.4,
            "total": 42.7,
            "BLANK": 1,
            "INSTR": "Stop sign, pavement: RIGHT onto Gates Pond Rd"
        },
        {
            "cue": 0.8,
            "total": 43.5,
            "BLANK": 1,
            "INSTR": "Stop sign at bottom of sharp hill; STRAIGHT onto Route 100 south"
        },
        {
            "cue": 0.0,
            "total": 43.5,
            "BLANK": 1,
            "INSTR": "Jacksonville General Store on this corner"
        },
        {
            "cue": 0.0,
            "total": 43.5,
            "BLANK": 1,
            "INSTR": "Immediate LEFT onto Route 112 south"
        },
        {
            "cue": "Cue",
            "total": "Total",
            "BLANK": 1,
            "INSTR": "Instruction"
        },
        {
            "cue": 0.4,
            "total": 43.9,
            "BLANK": 1,
            "INSTR": "RIGHT onto Holbrook Hill Rd just before bridge - 2 mile climb"
        },
        {
            "cue": 1.7,
            "total": 45.6,
            "BLANK": 1,
            "INSTR": "Road bends right and becomes Abbie Morse Rd"
        },
        {
            "cue": 0.5,
            "total": 46.1,
            "BLANK": 1,
            "INSTR": "Pavement; LEFT onto Maple Hill Ln"
        },
        {
            "cue": 1.1,
            "total": 47.2,
            "BLANK": 1,
            "INSTR": "First RIGHT onto Houghton Rd"
        },
        {
            "cue": 0.7,
            "total": 47.9,
            "BLANK": 1,
            "INSTR": "Pavement; RIGHT onto Burrington Hill Rd"
        },
        {
            "cue": 0.3,
            "total": 48.2,
            "BLANK": 1,
            "INSTR": "First LEFT onto Cyrus Rd"
        },
        {
            "cue": 0.1,
            "total": 48.3,
            "BLANK": 1,
            "INSTR": "Fork LEFT onto Sadadda Rd"
        },
        {
            "cue": 1.0,
            "total": 49.3,
            "BLANK": 1,
            "INSTR": "Lunch Stop: Amos Brown House. Opens 11:30, closes 3 PM"
        },
 
        {
            "cue": "Stage 3: Sadadda Rd to Steady Lane Farm (29 miles)   Rollers.  Big paved downhill.  Big gnarly dirt up.  Then some sweet and simple dirt.",
            "total": "",
            "BLANK": 3,
            "INSTR": ""
        },

        {
            "cue": "Cue",
            "total": "Total",
            "BLANK": 1,
            "INSTR": "Instruction"
        },
        {
            "cue": 0.0,
            "total": 49.3,
            "BLANK": 1,
            "INSTR": "Continue south, becomes Sadoga Rd"
        },
        {
            "cue": 1.5,
            "total": 50.8,
            "BLANK": 1,
            "INSTR": "Hard RIGHT onto Underwood Hill Rd - don't miss this turn!  Sign only for Sadoga Rd"
        },
        {
            "cue": 0.9,
            "total": 51.7,
            "BLANK": 1,
            "INSTR": "Bend LEFT, road becomes Sumner Stetson Rd"
        },
        {
            "cue": 1.6,
            "total": 53.3,
            "BLANK": 1,
            "INSTR": "T intersection, RIGHT onto Route 8A"
        },
        {
            "cue": 2.0,
            "total": 55.3,
            "BLANK": 1,
            "INSTR": "RIGHT onto Rowe Rd (no sign--very easy to miss, just past Long Hill Rd on the left and before red barn) - becomes Dell Rd"
        },
        {
            "cue": 2.4,
            "total": 57.7,
            "BLANK": 1,
            "INSTR": "Paved T intersection, LEFT onto Cyrus Stage Rd"
        },
        {
            "cue": 0.3,
            "total": 58.0,
            "BLANK": 1,
            "INSTR": "RIGHT onto Old Cyrus Stage Rd"
        },
        {
            "cue": 0.8,
            "total": 58.8,
            "BLANK": 1,
            "INSTR": "STRAIGHT across intersection onto Davis Mine Rd"
        },
        {
            "cue": 2.1,
            "total": 60.9,
            "BLANK": 1,
            "INSTR": "Hard RIGHT becomes Davenport Rd (do not go down Warner Hill)"
        },
        {
            "cue": 0.5,
            "total": 61.4,
            "BLANK": 1,
            "INSTR": "Left bend, still Davenport Rd"
        },
        {
            "cue": 1.0,
            "total": 62.4,
            "BLANK": 1,
            "INSTR": "RIGHT onto Tatro Rd (do not go down Maxwell) becomes Legate Hill Rd"
        },
        {
            "cue": 1.1,
            "total": 63.5,
            "BLANK": 1,
            "INSTR": "Serve-yourself water stop"
        },
        {
            "cue": 2.8,
            "total": 66.3,
            "BLANK": 1,
            "INSTR": "T intersection, LEFT onto Route 2 east (single file here please)"
        },
        {
            "cue": 0.9,
            "total": 67.2,
            "BLANK": 1,
            "INSTR": "RIGHT onto Route 8A (concrete bridge)"
        },
        {
            "cue": 0.1,
            "total": 67.3,
            "BLANK": 1,
            "INSTR": "T intersection, LEFT onto West Hawley Rd"
        },
        {
            "cue": 0.1,
            "total": 67.4,
            "BLANK": 1,
            "INSTR": "First RIGHT onto East Hawley Rd (4 mile climb)"
        },
        {
            "cue": 0.7,
            "total": 68.1,
            "BLANK": 1,
            "INSTR": "LEFT onto East Rd at break in guard rail (no sign)"
        },
        {
            "cue": 0.6,
            "total": 68.7,
            "BLANK": 1,
            "INSTR": "LEFT onto little bridge, still East Rd, STEEP"
        },
        {
            "cue": 1.8,
            "total": 70.5,
            "BLANK": 1,
            "INSTR": "Slight right bend at intersection, not quite straight, still East Rd"
        },
        {
            "cue": 0.8,
            "total": 71.3,
            "BLANK": 1,
            "INSTR": "Pavement, LEFT onto Forget Rd"
        },
        {
            "cue": 0.4,
            "total": 71.7,
            "BLANK": 1,
            "INSTR": "First RIGHT onto Pond Rd"
        },
        {
            "cue": 0.9,
            "total": 72.6,
            "BLANK": 1,
            "INSTR": "T intersection, RIGHT onto Buckland Rd"
        },
        {
            "cue": 0.6,
            "total": 73.2,
            "BLANK": 1,
            "INSTR": "T intersection, LEFT onto Plainfield Rd"
        },
        {
            "cue": 0.2,
            "total": 73.4,
            "BLANK": 1,
            "INSTR": "LEFT onto Ashfield Rd (at cemetery)"
        },
        {
            "cue": 1.2,
            "total": 74.6,
            "BLANK": 1,
            "INSTR": "Stay to the left (becomes Hawley Rd at town line)"
        },
        {
            "cue": 2.7,
            "total": 77.3,
            "BLANK": 1,
            "INSTR": "Stop sign; continue STRAIGHT (still Hawley Rd)"
        },
        {
            "cue": 1.0,
            "total": 78.3,
            "BLANK": 1,
            "INSTR": "Stop sign, RIGHT onto Route 112 south"
        },
        {
            "cue": 0.3,
            "total": 78.6,
            "BLANK": 1,
            "INSTR": "First LEFT onto Steady Lane"
        },
        {
            "cue": 0.2,
            "total": 78.8,
            "BLANK": 1,
            "INSTR": "REST STOP on right, Steady Lane Farm. Opens: 13:00; closes 17:30"
        },
 
        {
            "cue": "Stage 4: Steady Lane to Deerfield(16 miles)  An easy finish, half paved, with 1400 feet of net elevation loss",
            "total": "",
            "BLANK": 3,
            "INSTR": ""
        },

        {
            "cue": "Cue",
            "total": "Total",
            "BLANK": 1,
            "INSTR": "Instruction"
        },
        {
            "cue": 0.0,
            "total": 78.8,
            "BLANK": 1,
            "INSTR": "Continue on Steady Lane"
        },
        {
            "cue": 0.2,
            "total": 79.0,
            "BLANK": 1,
            "INSTR": "First LEFT onto Norton Hill Rd"
        },
        {
            "cue": 0.8,
            "total": 79.8,
            "BLANK": 1,
            "INSTR": "T intersection, RIGHT onto Route 116 south (Elmer's Store on corner)"
        },
        {
            "cue": 0.2,
            "total": 80.0,
            "BLANK": 1,
            "INSTR": "First LEFT onto Baptist Corner Rd"
        },
        {
            "cue": 0.9,
            "total": 80.9,
            "BLANK": 1,
            "INSTR": "Fork RIGHT onto Bellus Rd (dirt)"
        },
        {
            "cue": 1.2,
            "total": 82.1,
            "BLANK": 1,
            "INSTR": "Pavement, continue straight onto Beldingville Rd (becomes Saban Rd)"
        },
        {
            "cue": 2.1,
            "total": 84.2,
            "BLANK": 1,
            "INSTR": "Downhill RIGHT onto Pine Hill Rd (dirt)"
        },
        {
            "cue": "Cue",
            "total": "Total",
            "BLANK": 1,
            "INSTR": "Instruction"
        },
        {
            "cue": 0.7,
            "total": 84.9,
            "BLANK": 1,
            "INSTR": "Continue straight, ignore road closure"
        },
        {
            "cue": 0.6,
            "total": 85.5,
            "BLANK": 1,
            "INSTR": "Pavement; CAUTION, entering "
        },
        {
            "cue": 1.3,
            "total": 86.8,
            "BLANK": 1,
            "INSTR": "LEFT at grass triangle onto Upper Baptist Hill Rd"
        },
        {
            "cue": 0.1,
            "total": 86.9,
            "BLANK": 1,
            "INSTR": "Immediate LEFT again onto Emerson Hollow Rd"
        },
        {
            "cue": 0.0,
            "total": 86.9,
            "BLANK": 1,
            "INSTR": "Immediate RIGHT down Cemetery Hill Rd"
        },
        {
            "cue": 0.2,
            "total": 87.1,
            "BLANK": 1,
            "INSTR": "Bottom of hill, LEFT onto Shelburne Falls Rd"
        },
        {
            "cue": 0.1,
            "total": 87.2,
            "BLANK": 1,
            "INSTR": "RIGHT onto Reed's Bridge Rd (little bridge)"
        },
        {
            "cue": 0.1,
            "total": 87.3,
            "BLANK": 1,
            "INSTR": "LEFT after bridge, still Reed's Bridge Rd"
        },
        {
            "cue": 1.0,
            "total": 88.3,
            "BLANK": 1,
            "INSTR": "RIGHT in meadow onto Graves Rd"
        },
        {
            "cue": 1.8,
            "total": 90.1,
            "BLANK": 1,
            "INSTR": "Pavement, LEFT onto Matthews Rd (just before Route 116)"
        },
        {
            "cue": 0.4,
            "total": 90.5,
            "BLANK": 1,
            "INSTR": "LEFT onto Hoosac Rd"
        },
        {
            "cue": 1.8,
            "total": 92.3,
            "BLANK": 1,
            "INSTR": "Take the RIGHT fork (no sign)"
        },
        {
            "cue": 0.2,
            "total": 92.5,
            "BLANK": 1,
            "INSTR": "Pavement, RIGHT onto Stillwater Rd"
        },
        {
            "cue": 0.1,
            "total": 92.6,
            "BLANK": 1,
            "INSTR": "Fork LEFT onto Sand Gully Rd (no sign)"
        },
        {
            "cue": 1.1,
            "total": 93.7,
            "BLANK": 1,
            "INSTR": "Stop sign, LEFT onto Lee Rd, over I-91"
        },
        {
            "cue": 0.1,
            "total": 93.8,
            "BLANK": 1,
            "INSTR": "T intersection, LEFT onto Mill Village Rd"
        },
        {
            "cue": 1.6,
            "total": 95.4,
            "BLANK": 1,
            "INSTR": "FINISH at registration tent - be sure to CHECK IN"
        }
    ])

}

module.exports = global.myride;