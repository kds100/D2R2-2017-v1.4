var observableModule = require("data/observable")
var ObservableArray = require("data/observable-array").ObservableArray;

// #####################
// 100 K
// #####################

global.myride = {
    ridecue: new ObservableArray(
        [{
                "cue": "Stage 1: Deerfield to Patten Hill  (14 miles, 2400 ft climbing)  Two hard climbs and five rollers to start the day.",
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
                "INSTR": "Head south on Mill Village Rd",
                "isSelected": false
            },
            {
                "cue": 0.9,
                "total": 0.9,
                "BLANK": 1,
                "INSTR": "RIGHT at stone shack onto Stillwater Rd",
                "isSelected": false
            },
            {
                "cue": 1.0,
                "total": 1.9,
                "BLANK": 1,
                "INSTR": "RIGHT onto Upper Rd (concrete bridge over Deerfield River)",
                "isSelected": false
            },
            {
                "cue": 2.7,
                "total": 4.6,
                "BLANK": 1,
                "INSTR": "LEFT onto Old Albany Rd (as you approach Clarkdale Orchards)",
                "isSelected": false
            },
            {
                "cue": 0.3,
                "total": 4.9,
                "BLANK": 1,
                "INSTR": "Road narrows at house with solarium, don't follow riders closely.",
                "isSelected": false
            },
            {
                "cue": 0.3,
                "total": 5.2,
                "BLANK": 1,
                "INSTR": "Rough road continues under power lines",
                "isSelected": false
            },
            {
                "cue": 0.9,
                "total": 6.1,
                "BLANK": 1,
                "INSTR": "Road conditions improve",
                "isSelected": false
            },
            {
                "cue": 0.9,
                "total": 7.0,
                "BLANK": 1,
                "INSTR": "T-intersection, LEFT onto South Shelburne Rd",
                "isSelected": false
            },
            {
                "cue": 0.7,
                "total": 7.7,
                "BLANK": 1,
                "INSTR": "Slight LEFT to stay on S Shelburne Rd",
                "isSelected": false
            },
            {
                "cue": 1.1,
                "total": 8.8,
                "BLANK": 1,
                "INSTR": "STRAIGHT through 4-way intersection, no stop but watch for cars",
                "isSelected": false
            },
            {
                "cue": 1.2,
                "total": 10.0,
                "BLANK": 1,
                "INSTR": "Paved T-intersection, RIGHT onto Bardwell's Ferry Rd",
                "isSelected": false
            },
            {
                "cue": 0.0,
                "total": 10.0,
                "BLANK": 1,
                "INSTR": "Immediate LEFT onto Allen Rd",
                "isSelected": false
            },
            {
                "cue": 0.2,
                "total": 10.2,
                "BLANK": 1,
                "INSTR": "T-intersection, RIGHT onto Barnard Rd",
                "isSelected": false
            },
            {
                "cue": 0.1,
                "total": 10.3,
                "BLANK": 1,
                "INSTR": "T-intersection, LEFT onto Shelburne Center Rd",
                "isSelected": false
            },
            {
                "cue": 0.7,
                "total": 11.0,
                "BLANK": 1,
                "INSTR": "STRAIGHT across Route 2 onto Cooper Lane, CAUTION with 55 mph traffic",
                "isSelected": false
            },
            {
                "cue": 0.1,
                "total": 11.1,
                "BLANK": 1,
                "INSTR": "RIGHT at little grass triangle, uphill (still Cooper Lane, which soon becomes dirt)",
                "isSelected": false
            },
            {
                "cue": 2.0,
                "total": 13.1,
                "BLANK": 1,
                "INSTR": "Bend RIGHT onto Tower Rd",
                "isSelected": false
            },
            {
                "cue": 0.1,
                "total": 13.2,
                "BLANK": 1,
                "INSTR": "LEFT onto Square Lot Road (no sign) - a little dirt lane uphill lined by maple trees",
                "isSelected": false
            },
            {
                "cue": 0.4,
                "total": 13.6,
                "BLANK": 1,
                "INSTR": "T-intersection, LEFT onto Patten Rd",
                "isSelected": false
            },
            {
                "cue": 0.4,
                "total": 14.0,
                "BLANK": 1,
                "INSTR": "Water station: Little Big House Gallery  (Opens 9:45; closes 11:30)  (Quick stop, just water and Gatorade here)",
                "isSelected": false
            },
            {
                "cue": "Stage 2: Patten Hill to Green River Covered Bridge  (24 miles, 2600 ft climbing)  Two rollers, two long climbs, three more rollers, and finally a long downhill.",
                "total": "",
                "BLANK": 3,
                "INSTR": "",
                "isSelected": false
            },
            {
                "cue": 0.0,
                "total": 14.0,
                "BLANK": 1,
                "INSTR": "Double back the way you came on Patten Rd",
                "isSelected": false
            },
            {
                "cue": 0.6,
                "total": 14.6,
                "BLANK": 1,
                "INSTR": "Stay STRAIGHT, continuing on Patten Rd (past Square Lot Rd)",
                "isSelected": false
            },
            {
                "cue": 0.4,
                "total": 15.0,
                "BLANK": 1,
                "INSTR": "T-intersection, LEFT onto Tower Rd",
                "isSelected": false
            },
            {
                "cue": 0.1,
                "total": 15.1,
                "BLANK": 1,
                "INSTR": "Immediate LEFT onto Reynolds Rd",
                "isSelected": false
            },
            {
                "cue": 1.2,
                "total": 16.3,
                "BLANK": 1,
                "INSTR": "T-intersection, LEFT onto Little Mohawk Rd",
                "isSelected": false
            },
            {
                "cue": 1.0,
                "total": 17.3,
                "BLANK": 1,
                "INSTR": "LEFT on Provolich Rd at hilltop farm (becomes dirt)",
                "isSelected": false
            },
            {
                "cue": 1.8,
                "total": 19.1,
                "BLANK": 1,
                "INSTR": "T-intersection, LEFT onto Greenfield Rd (double-yellow line)",
                "isSelected": false
            },
            {
                "cue": 1.5,
                "total": 20.6,
                "BLANK": 1,
                "INSTR": "CAUTION at bottom of big hill - limited sight distance for oncoming traffic",
                "isSelected": false
            },
            {
                "cue": 0.1,
                "total": 20.7,
                "BLANK": 1,
                "INSTR": "Bend RIGHT past church onto Route 112 north, watch for traffic from left",
                "isSelected": false
            },
            {
                "cue": 2.9,
                "total": 23.6,
                "BLANK": 1,
                "INSTR": "RIGHT onto Franklin Hill Rd",
                "isSelected": false
            },
            {
                "cue": 0.2,
                "total": 23.8,
                "BLANK": 1,
                "INSTR": "LEFT at end of little bridge; the tiny dirt lane widens a bit after 100 yards",
                "isSelected": false
            },
            {
                "cue": 1.3,
                "total": 25.1,
                "BLANK": 1,
                "INSTR": "Bear LEFT at rock walls (other ways are jeep tracks) (water station here)",
                "isSelected": false
            },
            {
                "cue": 0.8,
                "total": 25.9,
                "BLANK": 1,
                "INSTR": "Slight LEFT onto Amidon Rd",
                "isSelected": false
            },
            {
                "cue": 0.0,
                "total": 25.9,
                "BLANK": 1,
                "INSTR": "Optional shortcut to lunch: skip the next turn and go straight 3.5 miles.",
                "isSelected": false
            },
            {
                "cue": 1.8,
                "total": 27.7,
                "BLANK": 1,
                "INSTR": "LEFT onto Jacksonville Stage Rd",
                "isSelected": false
            },
            {
                "cue": 1.5,
                "total": 29.2,
                "BLANK": 1,
                "INSTR": "Stay to the left",
                "isSelected": false
            },
            {
                "cue": 0.9,
                "total": 30.1,
                "BLANK": 1,
                "INSTR": "RIGHT onto Old County Rd\nNote that the routes diverge. Don't follow riders straight.",
                "isSelected": false
            },
            {
                "cue": 0.7,
                "total": 30.8,
                "BLANK": 1,
                "INSTR": "RIGHT onto Deer Park Rd",
                "isSelected": false
            },
            {
                "cue": 2.7,
                "total": 33.5,
                "BLANK": 1,
                "INSTR": "Bear RIGHT at bottom of hill to stay on Deer Park Rd",
                "isSelected": false
            },
            {
                "cue": 1.0,
                "total": 34.5,
                "BLANK": 1,
                "INSTR": "Stay to the left (at Josh Rd), dangerous descent ahead",
                "isSelected": false
            },
            {
                "cue": 0.3,
                "total": 34.8,
                "BLANK": 1,
                "INSTR": "CAUTION: Hard left bend onto wooden bridge",
                "isSelected": false
            },
            {
                "cue": 0.0,
                "total": 34.8,
                "BLANK": 1,
                "INSTR": "T-intersection, RIGHT onto Green River Rd (GPS calls this Hinesburg Rd)",
                "isSelected": false
            },
            {
                "cue": 0.0,
                "total": 34.8,
                "BLANK": 1,
                "INSTR": "Note: Optional Loop 1 starts at the following intersection; see last page.",
                "isSelected": false
            },
            {
                "cue": 1.2,
                "total": 36.0,
                "BLANK": 1,
                "INSTR": "RIGHT onto Green River Rd",
                "isSelected": false
            },
            {
                "cue": 1.9,
                "total": 37.9,
                "BLANK": 1,
                "INSTR": "Fork RIGHT into covered bridge on Jacksonville Stage Rd",
                "isSelected": false
            },
            {
                "cue": 0.0,
                "total": 37.9,
                "BLANK": 1,
                "INSTR": "Lunch Stop: Green River Covered Bridge (Opens 10:30; closes 16:00) park bikes off road",
                "isSelected": false
            },
            {
                "cue": "",
                "total": "",
                "BLANK": 3,
                "INSTR": "Note: Optional Loop 2 starts here; Scroll down.",
                "isSelected": false
            },
            {
                "cue": "Stage 3: Green River Covered Bridge to Apex Orchards  (15 miles, 1800 ft climbing)  Ten flat miles, then a hard two-stage climb to an apple/peach orchard.",
                "total": "",
                "BLANK": 3,
                "INSTR": "",
                "isSelected": false
            },
            {
                "cue": 0.0,
                "total": 37.9,
                "BLANK": 1,
                "INSTR": "Head south on Green River Rd (do not cross bridge or head uphill out of lunch)",
                "isSelected": false
            },
            {
                "cue": 3.5,
                "total": 41.4,
                "BLANK": 1,
                "INSTR": "Becomes N. Green River Rd. at State Line",
                "isSelected": false
            },
            {
                "cue": 2.7,
                "total": 44.1,
                "BLANK": 1,
                "INSTR": "WATER STOP on right.",
                "isSelected": false
            },
            {
                "cue": 0.0,
                "total": 44.1,
                "BLANK": 1,
                "INSTR": "Fork LEFT on Green River Rd.",
                "isSelected": false
            },
            {
                "cue": 0.2,
                "total": 44.3,
                "BLANK": 1,
                "INSTR": "Continue straight on Green River Rd (becomes dirt).\nNote that routes diverge. Don't follow riders over bridge up West Leyden Rd.",
                "isSelected": false
            },
            {
                "cue": 3.9,
                "total": 48.2,
                "BLANK": 1,
                "INSTR": "Hairpin RIGHT onto Nelson Rd (no other turns are close). \nNote that the routes diverge. Don't follow riders straight past this turn.",
                "isSelected": false
            },
            {
                "cue": 1.3,
                "total": 49.5,
                "BLANK": 1,
                "INSTR": "T-intersection, LEFT onto East Colrain Rd",
                "isSelected": false
            },
            {
                "cue": 1.3,
                "total": 50.8,
                "BLANK": 1,
                "INSTR": "T-intersection, pavement, LEFT down Van Nuys Rd (becomes Smead Hill Rd).\nNote that routes diverge. Don't follow riders right up Van Nuys Rd. ",
                "isSelected": false
            },
            {
                "cue": 0.3,
                "total": 51.1,
                "BLANK": 1,
                "INSTR": "RIGHT onto Wilson Graves Rd (alternates dirt and pavement)",
                "isSelected": false
            },
            {
                "cue": 1.2,
                "total": 52.3,
                "BLANK": 1,
                "INSTR": "T-intersection, RIGHT onto Brook Rd",
                "isSelected": false
            },
            {
                "cue": 0.2,
                "total": 52.5,
                "BLANK": 1,
                "INSTR": "LEFT onto Peckville Rd - tough stairstep climb",
                "isSelected": false
            },
            {
                "cue": 0.7,
                "total": 53.2,
                "BLANK": 1,
                "INSTR": "Refreshments: Apex Orchards  (Opens 11:30; closes 17:00)",
                "isSelected": false
            },
            {
                "cue": "Stage 4: Apex Orchards to Deerfield  (12miles, 1100 ft climbing)  A final one-mile climb precedes the gnarly descent of Hawk's Road",
                "total": "",
                "BLANK": 3,
                "INSTR": "",
                "isSelected": false
            },
            {
                "cue": 0.0,
                "total": 53.2,
                "BLANK": 1,
                "INSTR": "Continue on Peckville Rd",
                "isSelected": false
            },
            {
                "cue": 1.1,
                "total": 54.3,
                "BLANK": 1,
                "INSTR": "RIGHT onto Route 2",
                "isSelected": false
            },
            {
                "cue": 0.3,
                "total": 54.6,
                "BLANK": 1,
                "INSTR": "RIGHT onto Colrain Shelburne Rd",
                "isSelected": false
            },
            {
                "cue": 0.1,
                "total": 54.7,
                "BLANK": 1,
                "INSTR": "Quick LEFT onto Skinner Rd",
                "isSelected": false
            },
            {
                "cue": 0.6,
                "total": 55.3,
                "BLANK": 1,
                "INSTR": "STRAIGHT through 4-way intersection",
                "isSelected": false
            },
            {
                "cue": 0.7,
                "total": 56.0,
                "BLANK": 1,
                "INSTR": "LEFT onto Route 2",
                "isSelected": false
            },
            {
                "cue": 0.4,
                "total": 56.4,
                "BLANK": 1,
                "INSTR": "Fork RIGHT onto Old Greenfield Rd",
                "isSelected": false
            },
            {
                "cue": 0.2,
                "total": 56.6,
                "BLANK": 1,
                "INSTR": "RIGHT at 4-way intersection onto Zerah Fiske Rd",
                "isSelected": false
            },
            {
                "cue": 0.5,
                "total": 57.1,
                "BLANK": 1,
                "INSTR": "LEFT onto Lucy Fiske Rd (dirt) Don't miss this turn!",
                "isSelected": false
            },
            {
                "cue": 0.6,
                "total": 57.7,
                "BLANK": 1,
                "INSTR": "STRAIGHT onto South Shelburne Rd",
                "isSelected": false
            },
            {
                "cue": 0.5,
                "total": 58.2,
                "BLANK": 1,
                "INSTR": "RIGHT onto Taylor Rd at bottom of steep hill - don't miss this turn!",
                "isSelected": false
            },
            {
                "cue": 1.7,
                "total": 59.9,
                "BLANK": 1,
                "INSTR": "LEFT onto Hawk's Rd (underneath power lines)",
                "isSelected": false
            },
            {
                "cue": 0.0,
                "total": 59.9,
                "BLANK": 1,
                "INSTR": "CAUTION: livestock often in road next 0.5 mile",
                "isSelected": false
            },
            {
                "cue": 0.3,
                "total": 60.2,
                "BLANK": 1,
                "INSTR": "Road turns to dirt at bottom of hill.  Becomes rough, rolling rocky and rutted ahead!",
                "isSelected": false
            },
            {
                "cue": 2.3,
                "total": 62.5,
                "BLANK": 1,
                "INSTR": "Bear right, staying on pavement",
                "isSelected": false
            },
            {
                "cue": 0.2,
                "total": 62.7,
                "BLANK": 1,
                "INSTR": "Bottom of sharp hill, RIGHT onto Upper Rd - Dangerous intersection! (no sign)",
                "isSelected": false
            },
            {
                "cue": 1.0,
                "total": 63.7,
                "BLANK": 1,
                "INSTR": "T-intersection after concrete bridge, LEFT onto Stillwater Rd",
                "isSelected": false
            },
            {
                "cue": 0.9,
                "total": 64.6,
                "BLANK": 1,
                "INSTR": "T-intersection, LEFT onto Mill Village Rd (no sign)",
                "isSelected": false
            },
            {
                "cue": 0.0,
                "total": 64.6,
                "BLANK": 1,
                "INSTR": "Note: Optional 5-Mile Finishing Loop starts here; see last page.",
                "isSelected": false
            },
            {
                "cue": 0.9,
                "total": 65.5,
                "BLANK": 1,
                "INSTR": "FINISH at registration tent - be sure to CHECK IN.  Opens 12:30; closes 20:00 (food will be served until 9PM).  Shuttle bus available to showers.",
                "isSelected": false
            },
            {
                "cue": "Optional Loop 1: West Guilford (9.5 miles, 1200 ft climbing)  A loop with three one-mile climbs; watch odometer carefully to stay on course.",
                "total": "",
                "BLANK": 3,
                "INSTR": "",
                "isSelected": false
            },
            {
                "cue": 0.0,
                "total": 0.0,
                "BLANK": 1,
                "INSTR": "Continue STRAIGHT onto Hinesburg Rd (which soon becomes a paved climb)",
                "isSelected": false
            },
            {
                "cue": 3.1,
                "total": 3.1,
                "BLANK": 1,
                "INSTR": "Hairpin downhill RIGHT turn onto Akley Rd - Don't miss this turn.",
                "isSelected": false
            },
            {
                "cue": 0.3,
                "total": 3.4,
                "BLANK": 1,
                "INSTR": "RIGHT, still Akley Rd",
                "isSelected": false
            },
            {
                "cue": 1.0,
                "total": 4.4,
                "BLANK": 1,
                "INSTR": "T intersection, RIGHT onto Bonnyvale Rd",
                "isSelected": false
            },
            {
                "cue": 1.3,
                "total": 5.7,
                "BLANK": 1,
                "INSTR": "RIGHT onto Barney Hill Rd - NO SIGN!  It's a steep twisty climb for 0.7 mile.",
                "isSelected": false
            },
            {
                "cue": "",
                "total": "",
                "BLANK": 1,
                "INSTR": "NOTE: at top of climb, farm animals often in the road, it's not a dead-end.",
                "isSelected": false
            },
            {
                "cue": 1.4,
                "total": 7.1,
                "BLANK": 1,
                "INSTR": "T intersection, RIGHT onto Carpenter Hill Rd",
                "isSelected": false
            },
            {
                "cue": 1.8,
                "total": 8.9,
                "BLANK": 1,
                "INSTR": "Bottom of hill, sharp LEFT back onto Hinesburg Rd",
                "isSelected": false
            },
            {
                "cue": 0.6,
                "total": 9.5,
                "BLANK": 1,
                "INSTR": "LEFT onto Green River Rd, back onto mile 33.55 of main course",
                "isSelected": false
            },
            {
                "cue": "",
                "total": "",
                "BLANK": 3,
                "INSTR": "",
                "isSelected": false
            },
            {
                "cue": "Optional Loop 2: Following the long course.  An extra ten miles with three long climbs and descents.",
                "total": "",
                "BLANK": 3,
                "INSTR": "",
                "isSelected": false
            },
            {
                "cue": 0.0,
                "total": 0.0,
                "BLANK": 1,
                "INSTR": "Go back through covered bridge and stay straight, uphill on Jacksonville Stage Rd",
                "isSelected": false
            },
            {
                "cue": 2.5,
                "total": 2.5,
                "BLANK": 1,
                "INSTR": "T-intersection, RIGHT onto Sweet's Pond Rd (intersection is paved)",
                "isSelected": false
            },
            {
                "cue": 1.2,
                "total": 3.7,
                "BLANK": 1,
                "INSTR": "Sweet's Pond Rd bends right up sharp hill (at Potash Rd)",
                "isSelected": false
            },
            {
                "cue": 0.9,
                "total": 4.6,
                "BLANK": 1,
                "INSTR": "Stay to the left (at Abijah Prince Rd)",
                "isSelected": false
            },
            {
                "cue": 2.3,
                "total": 6.9,
                "BLANK": 1,
                "INSTR": "Fork to the right, still on Sweet Pond Rd",
                "isSelected": false
            },
            {
                "cue": 0.2,
                "total": 7.1,
                "BLANK": 1,
                "INSTR": "Cross pavement onto Keat's Brook Rd",
                "isSelected": false
            },
            {
                "cue": 1.0,
                "total": 8.1,
                "BLANK": 1,
                "INSTR": "RIGHT onto Simon Keet's Rd (bridge)",
                "isSelected": false
            },
            {
                "cue": 0.6,
                "total": 8.7,
                "BLANK": 1,
                "INSTR": "Merge straight onto Brattleboro Rd (pavement)",
                "isSelected": false
            },
            {
                "cue": 0.1,
                "total": 8.8,
                "BLANK": 1,
                "INSTR": "RIGHT onto Greenfield Rd",
                "isSelected": false
            },
            {
                "cue": 0.2,
                "total": 9.0,
                "BLANK": 1,
                "INSTR": "RIGHT onto Alexander Rd",
                "isSelected": false
            },
            {
                "cue": 1.5,
                "total": 10.5,
                "BLANK": 1,
                "INSTR": "Top of climb, LEFT onto North County Rd",
                "isSelected": false
            },
            {
                "cue": 2.0,
                "total": 12.5,
                "BLANK": 1,
                "INSTR": "T-intersection, RIGHT onto West Leyden Rd",
                "isSelected": false
            },
            {
                "cue": 2.1,
                "total": 14.6,
                "BLANK": 1,
                "INSTR": "T-intersection, LEFT onto Green River Rd to rejoin the main course",
                "isSelected": false
            },
            {
                "cue": 0.0,
                "total": 14.6,
                "BLANK": 1,
                "INSTR": "This is mile 43.30 of main course",
                "isSelected": false
            },
            {
                "cue": "",
                "total": "",
                "BLANK": 1,
                "INSTR": "",
                "isSelected": false
            },
            {
                "cue": "Optional 5-mile Finishing Loop (the original finish from 2005)  This flat section charms with Old Deerfield and The Corn Maze - but watch odometer - most roads have no sign.",
                "total": "",
                "BLANK": 3,
                "INSTR": "",
                "isSelected": false
            },
            {
                "cue": 0.0,
                "total": 0.0,
                "BLANK": 1,
                "INSTR": "Continue north on Mill Village Rd",
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
                "cue": 0.3,
                "total": 1.1,
                "BLANK": 1,
                "INSTR": "LEFT onto Albany Rd",
                "isSelected": false
            },
            {
                "cue": 0.1,
                "total": 1.2,
                "BLANK": 1,
                "INSTR": "Immediate LEFT again to stay on Albany Rd",
                "isSelected": false
            },
            {
                "cue": 0.2,
                "total": 1.4,
                "BLANK": 1,
                "INSTR": "End of street, RIGHT behind building onto Little Meadow Rd",
                "isSelected": false
            },
            {
                "cue": 0.8,
                "total": 2.2,
                "BLANK": 1,
                "INSTR": "Continue STRAIGHT onto Pogues Hole Rd (corn tunnel)",
                "isSelected": false
            },
            {
                "cue": 0.5,
                "total": 2.7,
                "BLANK": 1,
                "INSTR": "RIGHT onto farm track through the grass (Round Pond Rd)",
                "isSelected": false
            },
            {
                "cue": 0.7,
                "total": 3.4,
                "BLANK": 1,
                "INSTR": "T intersection, RIGHT onto Old Ferry Rd",
                "isSelected": false
            },
            {
                "cue": 0.1,
                "total": 3.5,
                "BLANK": 1,
                "INSTR": "Bear LEFT on Broughams Pond Rd / Old Ferry Rd",
                "isSelected": false
            },
            {
                "cue": 0.1,
                "total": 3.6,
                "BLANK": 1,
                "INSTR": "Bend RIGHT onto Old Main St",
                "isSelected": false
            },
            {
                "cue": 0.9,
                "total": 4.5,
                "BLANK": 1,
                "INSTR": "Bear RIGHT onto Mill Village Rd",
                "isSelected": false
            },
            {
                "cue": 0.7,
                "total": 5.2,
                "BLANK": 1,
                "INSTR": "Return to registration/parking/dinner",
                "isSelected": false
            }
        ]
    )

}

module.exports = global.myride;