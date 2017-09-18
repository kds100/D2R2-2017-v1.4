var observableModule = require("data/observable")
var ObservableArray = require("data/observable-array").ObservableArray;

global.myride = {
        ridecue: new ObservableArray([{
                        "cue": "Stage 1: Deerfield to Ten-Mile Bridge.  (16 miles, 1300 ft climbing)  10 easy paved miles, then 5 easy miles on dirt",
                        "total": "",
                        "BLANK": 3,
                        "INSTR": "",
                        "isSelected": false
                },

                {
                        "cue": "Cue",
                        "total": "Total",
                        "BLANK": 1,
                        "INSTR": "Instruction",
                        "isSelected": false
                },
                {
                        "cue": 0.0,
                        "total": 0.0,
                        "BLANK": 1,
                        "INSTR": "Leave starting area by turning RIGHT (north) onto Mill Village Rd",
                        "isSelected": false
                },
                {
                        "cue": 0.8,
                        "total": 0.8,
                        "BLANK": 1,
                        "INSTR": "Bear LEFT onto Old Main St",
                        "isSelected": false
                },
                {
                        "cue": 0.8,
                        "total": 1.6,
                        "BLANK": 1,
                        "INSTR": "Bear RIGHT onto Main St at north end of Old Deerfield",
                        "isSelected": false
                },
                {
                        "cue": 0.2,
                        "total": 1.8,
                        "BLANK": 1,
                        "INSTR": "T-intersection, LEFT onto Route 5 north",
                        "isSelected": false
                },
                {
                        "cue": 2.5,
                        "total": 4.3,
                        "BLANK": 1,
                        "INSTR": "LEFT onto Mill St, the light just before RR overpass (becomes River St)",
                        "isSelected": false
                },
                {
                        "cue": 0.8,
                        "total": 5.1,
                        "BLANK": 1,
                        "INSTR": "STRAIGHT through lights onto Shelburne Rd",
                        "isSelected": false
                },
                {
                        "cue": 0.3,
                        "total": 5.4,
                        "BLANK": 1,
                        "INSTR": "Next RIGHT onto Woodard Rd",
                        "isSelected": false
                },
                {
                        "cue": 0.4,
                        "total": 5.8,
                        "BLANK": 1,
                        "INSTR": "T-intersection, RIGHT onto Colrain St",
                        "isSelected": false
                },
                {
                        "cue": 0.0,
                        "total": 5.8,
                        "BLANK": 1,
                        "INSTR": "LEFT just after bridge onto Riverside Dr",
                        "isSelected": false
                },
                {
                        "cue": 0.1,
                        "total": 5.9,
                        "BLANK": 1,
                        "INSTR": "Bear LEFT onto bike path",
                        "isSelected": false
                },
                {
                        "cue": 1.0,
                        "total": 6.9,
                        "BLANK": 1,
                        "INSTR": "End of bike path, RIGHT onto Nash's Mill Rd",
                        "isSelected": false
                },
                {
                        "cue": 0.4,
                        "total": 7.3,
                        "BLANK": 1,
                        "INSTR": "T-intersection, LEFT onto Leyden Rd / Conway St",
                        "isSelected": false
                },
                {
                        "cue": 2.8,
                        "total": 10.1,
                        "BLANK": 1,
                        "INSTR": "LEFT onto Eunice Williams Dr (a short way after sign for Camp Kee-wanee).\nNote that the 160K route diverges, do not follow riders straight up Leyden Rd.",
                        "isSelected": false
                },
                {
                        "cue": 0.7,
                        "total": 10.8,
                        "BLANK": 1,
                        "INSTR": "T intersection, RIGHT onto Green River Road",
                        "isSelected": false
                },
                {
                        "cue": 5.0,
                        "total": 15.8,
                        "BLANK": 1,
                        "INSTR": "Pavement - STRAIGHT on Green River Rd (don't follow riders up West Leyden Rd yet)",
                        "isSelected": false
                },
                {
                        "cue": 0.1,
                        "total": 15.9,
                        "BLANK": 1,
                        "INSTR": "RIGHT on North Green River Rd",
                        "isSelected": false
                },
                {
                        "cue": 0.0,
                        "total": 15.9,
                        "BLANK": 1,
                        "INSTR": "WATER STOP (Quick stop - just water and Gatorade here)",
                        "isSelected": false
                },
      
                {
                        "cue": 0,
                        "total": "",
                        "BLANK": 3,
                        "INSTR": "Note that the Green River Ride route diverges, do not follow riders past the water stop.",
                        "isSelected": false
                },
               
                {
                        "cue": "Stage 2: Ten-Mile Bridge to Green River Covered Bridge  (24 miles, 3200 ft climbing)  Two jeeps tracks make some tricky navigation. The climbing gets tougher.  Less than one mile of pavement.",
                        "total": "",
                        "BLANK": 3,
                        "INSTR": "",
                        "isSelected": false
                },


                {
                        "cue": "Cue",
                        "total": "Total",
                        "BLANK": 1,
                        "INSTR": "Instruction",
                        "isSelected": false
                },
                {
                        "cue": 0.1,
                        "total": 16.0,
                        "BLANK": 1,
                        "INSTR": "Double back from the water stop and take immediate LEFT onto Green River Rd",
                        "isSelected": false
                },
                {
                        "cue": 0.1,
                        "total": 16.1,
                        "BLANK": 1,
                        "INSTR": "LEFT over bridge onto West Leyden Rd.\nNote that routes diverge. Don't follow riders continuing straight on Green River Rd",
                        "isSelected": false
                },
                {
                        "cue": 0.2,
                        "total": 16.3,
                        "BLANK": 1,
                        "INSTR": "LEFT onto River Rd",
                        "isSelected": false
                },
                {
                        "cue": 0.9,
                        "total": 17.2,
                        "BLANK": 1,
                        "INSTR": "Continue straight on River Rd (do not go up Gates Rd)",
                        "isSelected": false
                },
                {
                        "cue": 0.8,
                        "total": 18.0,
                        "BLANK": 1,
                        "INSTR": "Continue straight past ",
                        "isSelected": false
                },
                {
                        "cue": 0.6,
                        "total": 18.6,
                        "BLANK": 1,
                        "INSTR": "Continue straight past gun club onto very rough jeep track",
                        "isSelected": false
                },
                {
                        "cue": 0.4,
                        "total": 19.0,
                        "BLANK": 1,
                        "INSTR": "RIGHT onto Packer Corner Rd, a maintained road",
                        "isSelected": false
                },
                {
                        "cue": 0.3,
                        "total": 19.3,
                        "BLANK": 1,
                        "INSTR": "When road turns right continue STRAIGHT uphill on jeep track (ignore Posted signs).",
                        "isSelected": false
                },
                {
                        "cue": 0.5,
                        "total": 19.8,
                        "BLANK": 1,
                        "INSTR": "Jeep track gets more civilized (at Johnson Pasture Dr); this is Abijah Prince Rd",
                        "isSelected": false
                },
                {
                        "cue": 0.9,
                        "total": 20.7,
                        "BLANK": 1,
                        "INSTR": "LEFT onto Sweet Pond Rd",
                        "isSelected": false
                },
                {
                        "cue": 2.1,
                        "total": 22.8,
                        "BLANK": 1,
                        "INSTR": "Bear RIGHT onto pavement; becomes Guilford Center Rd.\nNote that the 160K route diverges. Don't follow riders left onto (Jacksonville) Stage Rd",
                        "isSelected": false
                },
                {
                        "cue": 0.7,
                        "total": 23.4,
                        "BLANK": 1,
                        "INSTR": "LEFT onto Carpenter Hill Rd just past old church (Guilford Free Library)",
                        "isSelected": false
                },
                {
                        "cue": 0.4,
                        "total": 23.8,
                        "BLANK": 1,
                        "INSTR": "RIGHT onto Barney Hill Rd",
                        "isSelected": false
                },
                {
                        "cue": 0.2,
                        "total": 24.0,
                        "BLANK": 1,
                        "INSTR": "Top of hill, farm animals often in road; CAUTION: hard right turn on descent",
                        "isSelected": false
                },
                {
                        "cue": 1.2,
                        "total": 25.2,
                        "BLANK": 1,
                        "INSTR": "T-intersection, LEFT onto Bonnyvale Rd",
                        "isSelected": false
                },
                {
                        "cue": 1.3,
                        "total": 26.5,
                        "BLANK": 1,
                        "INSTR": "LEFT onto Akley Rd (unmarked).  White farmhouse here with red barn",
                        "isSelected": false
                },
                {
                        "cue": 1.0,
                        "total": 27.5,
                        "BLANK": 1,
                        "INSTR": "T-intersection, RIGHT onto Goodenough Rd",
                        "isSelected": false
                },
                {
                        "cue": 1.1,
                        "total": 28.6,
                        "BLANK": 1,
                        "INSTR": "T-intersection, RIGHT onto Hinesburg Rd (paved)",
                        "isSelected": false
                },
                {
                        "cue": 0.5,
                        "total": 29.1,
                        "BLANK": 1,
                        "INSTR": "T-intersection, LEFT onto Ames Hill Rd",
                        "isSelected": false
                },
                {
                        "cue": 0.7,
                        "total": 29.8,
                        "BLANK": 1,
                        "INSTR": "T-intersection, LEFT; still Ames Hill Rd; begin tough climb",
                        "isSelected": false
                },
                {
                        "cue": 1.9,
                        "total": 31.7,
                        "BLANK": 1,
                        "INSTR": "LEFT onto Barrows Rd; your reward is the view",
                        "isSelected": false
                },
                {
                        "cue": 0.7,
                        "total": 32.4,
                        "BLANK": 1,
                        "INSTR": "Barrows Rd bends right",
                        "isSelected": false
                },
                {
                        "cue": 1.0,
                        "total": 33.4,
                        "BLANK": 1,
                        "INSTR": "T-intersection LEFT onto Cow Path 40 (no sign) Green-ish house ahead of this turn. Becomes Hale Rd.",
                        "isSelected": false
                },
          
                {
                        "cue": 0.6,
                        "total": 34.0,
                        "BLANK": 1,
                        "INSTR": "CAUTION: many wooden-deck bridges on long descent ahead",
                        "isSelected": false
                },
                {
                        "cue": 0.5,
                        "total": 34.5,
                        "BLANK": 1,
                        "INSTR": "Note that routes diverge. Don't follow 160K rider right on Thomas Hill Rd.",
                        "isSelected": false
                },
                {
                        "cue": 1.6,
                        "total": 36.1,
                        "BLANK": 1,
                        "INSTR": "Stop sign, STRAIGHT onto Hinesburg Rd (paved)",
                        "isSelected": false
                },
                {
                        "cue": 1.0,
                        "total": 37.1,
                        "BLANK": 1,
                        "INSTR": "LEFT onto Green River Rd",
                        "isSelected": false
                },
                {
                        "cue": 2.0,
                        "total": 39.1,
                        "BLANK": 1,
                        "INSTR": "Fork RIGHT into covered bridge on Jacksonville Stage Rd",
                        "isSelected": false
                },
                {
                        "cue": 0.0,
                        "total": 39.1,
                        "BLANK": 1,
                        "INSTR": "Lunch Stop: Green River Covered Bridge. Open 10:30-16:00. Park bikes off road",
                        "isSelected": false
                },

                {
                        "cue": "Stage 3: Green River Covered Bridge to Patten Hill(22 miles, 3530 ft climbing)  A hard dirt climb, a very hard dirt climb, and then a super-hard dirt climb.",
                        "total": "",
                        "BLANK": 3,
                        "INSTR": "",
                        "isSelected": false
                },
                {
                        "cue": 0,
                        "total": 0,
                        "BLANK": 1,
                        "INSTR": "A hard dirt climb, a very hard dirt climb, and then a super-hard dirt climb.",
                        "isSelected": false
                },
                {
                        "cue": "Cue",
                        "total": "Total",
                        "BLANK": 1,
                        "INSTR": "Instruction",
                        "isSelected": false
                },
                {
                        "cue": 0.0,
                        "total": 39.1,
                        "BLANK": 1,
                        "INSTR": "Continue uphill on Jacksonville Stage Rd (not over bridge nor down Green River Rd)",
                        "isSelected": false
                },
                {
                        "cue": 3.5,
                        "total": 42.6,
                        "BLANK": 1,
                        "INSTR": "RIGHT, still Jacksonville Stage Rd",
                        "isSelected": false
                },
                {
                        "cue": 1.5,
                        "total": 44.1,
                        "BLANK": 1,
                        "INSTR": "LEFT, still Jacksonville Stage Rd",
                        "isSelected": false
                },
                {
                        "cue": 0.8,
                        "total": 44.9,
                        "BLANK": 1,
                        "INSTR": "Continue STRAIGHT through intersection by old church. Road will bend to the right\nNote that the routes diverge. Don't follow riders right onto Old County Rd.",
                        "isSelected": false
                },
                {
                        "cue": 1.8,
                        "total": 46.7,
                        "BLANK": 1,
                        "INSTR": "Downhill pavement into village, LEFT onto Branch Rd",
                        "isSelected": false
                },
                {
                        "cue": 0.8,
                        "total": 47.5,
                        "BLANK": 1,
                        "INSTR": "LEFT, still on Branch Rd",
                        "isSelected": false
                },
                {
                        "cue": 1.2,
                        "total": 48.7,
                        "BLANK": 1,
                        "INSTR": "LEFT onto Route 112 south",
                        "isSelected": false
                },
                {
                        "cue": 0.2,
                        "total": 48.9,
                        "BLANK": 1,
                        "INSTR": "RIGHT onto Pennel Hill Rd.\nMajor steep climb ahead, which you can avoid by continuing south on Rt. 112 and picking up the route again just after it rejoins Rt. 112 at mile 58.1 (coming off Adamsville Rd on a green bridge).",
                        "isSelected": false
                },
                {
                        "cue": 0.8,
                        "total": 49.7,
                        "BLANK": 1,
                        "INSTR": "LEFT onto Phillips Hill Rd - more climbing",
                        "isSelected": false
                },
                {
                        "cue": 1.3,
                        "total": 51.0,
                        "BLANK": 1,
                        "INSTR": "T-intersection, LEFT onto Ed Clark Rd",
                        "isSelected": false
                },
                {
                        "cue": 0.9,
                        "total": 51.9,
                        "BLANK": 1,
                        "INSTR": "CAUTION: Super-fast downhill with crazy turns and full stop at the bottom.",
                        "isSelected": false
                },
                {
                        "cue": 2.1,
                        "total": 54.0,
                        "BLANK": 1,
                        "INSTR": "T-intersection, LEFT onto Adamsville Rd",
                        "isSelected": false
                },
                {
                        "cue": 2.7,
                        "total": 56.7,
                        "BLANK": 1,
                        "INSTR": "Bear RIGHT just before cemetery, still Adamsville Rd, joining 180K route",
                        "isSelected": false
                },
                {
                        "cue": 0.8,
                        "total": 57.5,
                        "BLANK": 1,
                        "INSTR": "T-intersection RIGHT onto Route 112 south after green iron bridge",
                        "isSelected": false
                },
                {
                        "cue": 0.3,
                        "total": 57.8,
                        "BLANK": 1,
                        "INSTR": "Fork LEFT before bridge onto Call Rd",
                        "isSelected": false
                },
                {
                        "cue": 0.8,
                        "total": 58.6,
                        "BLANK": 1,
                        "INSTR": "Walk across tiny closed bridge",
                        "isSelected": false
                },
                {
                        "cue": 0.9,
                        "total": 59.5,
                        "BLANK": 1,
                        "INSTR": "LEFT onto Patten Hill Rd at triangle (sign is 60 ft later, on other fork of road) - big climb",
                        "isSelected": false
                },
                {
                        "cue": 1.9,
                        "total": 61.4,
                        "BLANK": 1,
                        "INSTR": "Rest Stop: Little Big House Gallery. Opens: 12:00; closes 18:00",
                        "isSelected": false
                },
                {
                        "cue": 0,
                        "total": 0,
                        "BLANK": 1,
                        "INSTR": "",
                        "isSelected": false
                },
                {
                        "cue": "Stage 4: Patten Hill to Deerfield(12 miles, 1100 ft climbing)",
                        "total": "",
                        "BLANK": 3,
                        "INSTR": "",
                        "isSelected": false
                },
                {
                        "cue": 0,
                        "total": 0,
                        "BLANK": 1,
                        "INSTR": "Two big descents with rollers in between; note deviation from 180K loop at mile 64.1.",
                        "isSelected": false
                },
                {
                        "cue": "Cue",
                        "total": "Total",
                        "BLANK": 1,
                        "INSTR": "Instruction",
                        "isSelected": false
                },
                {
                        "cue": 0.0,
                        "total": 61.4,
                        "BLANK": 1,
                        "INSTR": "Continue south on Patten Hill Rd",
                        "isSelected": false
                },
                {
                        "cue": 0.5,
                        "total": 61.9,
                        "BLANK": 1,
                        "INSTR": "RIGHT onto Square Lot Rd (tiny tree-lined lane, no sign)",
                        "isSelected": false
                },
                {
                        "cue": 0.3,
                        "total": 62.2,
                        "BLANK": 1,
                        "INSTR": "T-intersection, RIGHT onto Tower Rd",
                        "isSelected": false
                },
                {
                        "cue": 0.2,
                        "total": 62.4,
                        "BLANK": 1,
                        "INSTR": "Bear LEFT onto Cooper Lane at triangle intersection (sign only for Tower Rd)",
                        "isSelected": false
                },
                {
                        "cue": 1.8,
                        "total": 64.2,
                        "BLANK": 1,
                        "INSTR": "Pavement at bottom of long descent: CAUTION, full stop coming up",
                        "isSelected": false
                },
                {
                        "cue": 0.1,
                        "total": 64.3,
                        "BLANK": 1,
                        "INSTR": "T-intersection, LEFT; Caution: limited sight distance on left",
                        "isSelected": false
                },
                {
                        "cue": 0.1,
                        "total": 64.4,
                        "BLANK": 1,
                        "INSTR": "Straight across Route 2 onto Shelburne Center Rd (Caution with 55 mph traffic)",
                        "isSelected": false
                },
                {
                        "cue": 0.8,
                        "total": 65.2,
                        "BLANK": 1,
                        "INSTR": "RIGHT onto James Barnard Rd",
                        "isSelected": false
                },
                {
                        "cue": 0.1,
                        "total": 65.3,
                        "BLANK": 1,
                        "INSTR": "LEFT onto Allen Rd",
                        "isSelected": false
                },
                {
                        "cue": 0.1,
                        "total": 65.4,
                        "BLANK": 1,
                        "INSTR": "T-intersection at bottom of steep hill, go RIGHT onto Bardwell's Ferry Rd\nNote that the 180k route diverges, don't follow riders left onto S. Shelburne Rd",
                        "isSelected": false
                },
                {
                        "cue": 2.2,
                        "total": 67.6,
                        "BLANK": 1,
                        "INSTR": "After steep downhill, Sharp LEFT onto Taylor Rd.",
                        "isSelected": false
                },
                {
                        "cue": 0.5,
                        "total": 68.1,
                        "BLANK": 1,
                        "INSTR": "RIGHT onto Hawk's Rd (underneath power lines) rejoining the 180K route to the finish",
                        "isSelected": false
                },
                {
                        "cue": 0.5,
                        "total": 68.6,
                        "BLANK": 1,
                        "INSTR": "Continue straight at driveway",
                        "isSelected": false
                },
                {
                        "cue": "Cue",
                        "total": "Total",
                        "BLANK": 1,
                        "INSTR": "Instruction",
                        "isSelected": false
                },
                {
                        "cue": 0.2,
                        "total": 68.8,
                        "BLANK": 1,
                        "INSTR": "CAUTION, gnarly descent, stones, washouts next mile",
                        "isSelected": false
                },
                {
                        "cue": 1.8,
                        "total": 70.6,
                        "BLANK": 1,
                        "INSTR": "Bear right, staying on pavement",
                        "isSelected": false
                },
                {
                        "cue": 0.2,
                        "total": 70.8,
                        "BLANK": 1,
                        "INSTR": "Bottom of sharp hill, RIGHT onto Upper Rd (no sign) - Dangerous intersection! ",
                        "isSelected": false
                },
                {
                        "cue": 1.0,
                        "total": 71.8,
                        "BLANK": 1,
                        "INSTR": "T-intersection after concrete bridge, LEFT onto Stillwater Rd",
                        "isSelected": false
                },
                {
                        "cue": 1.0,
                        "total": 72.8,
                        "BLANK": 1,
                        "INSTR": "T-intersection, LEFT onto Mill Village Rd",
                        "isSelected": false
                },
                {
                        "cue": 0.9,
                        "total": 73.7,
                        "BLANK": 1,
                        "INSTR": "FINISH at registration tent - be sure to CHECK IN",
                        "isSelected": false
                },
                {
                        "cue": 0,
                        "total": 0,
                        "BLANK": 1,
                        "INSTR": "Opens 12:30; closes 20:00 (food will be served until 9PM)",
                        "isSelected": false
                },
                {
                        "cue": 0,
                        "total": 0,
                        "BLANK": 1,
                        "INSTR": "Shuttle bus available to showers."
                }
        ])

}

module.exports = global.myride;