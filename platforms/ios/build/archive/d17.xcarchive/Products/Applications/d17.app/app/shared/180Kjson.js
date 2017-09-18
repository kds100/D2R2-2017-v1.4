var observableModule = require("data/observable")
var ObservableArray = require("data/observable-array").ObservableArray;

// #####################
// 180 K
// #####################

global.myride = {
    ridecue: new ObservableArray(

        [{
                "cue": "Stage 1: Deerfield to Heath(37 miles, ~5000 ' total climbing)  This section is hard - but it is just a warm up. Pace yourself accordingly.",
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
                "INSTR": "Head South on Mill Village Rd (LEFT out of main D2R2 field)"
            },
            {
                "cue": 0.9,
                "total": 0.9,
                "BLANK": 1,
                "INSTR": "RIGHT at stone shack onto Stillwater Rd"
            },
            {
                "cue": 1.4,
                "total": 2.3,
                "BLANK": 1,
                "INSTR": "RIGHT onto Hoosac Rd (which soon turns to dirt)"
            },
            {
                "cue": 2.0,
                "total": 4.3,
                "BLANK": 1,
                "INSTR": "T-intersection, RIGHT onto Matthews Rd"
            },
            {
                "cue": 0.2,
                "total": 4.5,
                "BLANK": 1,
                "INSTR": "RIGHT onto Boyden Rd (tiny driveway-sized road; the sign is 100 ft. past turn)"
            },
            {
                "cue": 1.0,
                "total": 5.5,
                "BLANK": 1,
                "INSTR": "T-intersection, RIGHT onto Graves Rd"
            },
            {
                "cue": 0.9,
                "total": 6.4,
                "BLANK": 1,
                "INSTR": "T-intersection, RIGHT onto Reed's Bridge Rd"
            },
            {
                "cue": 1.4,
                "total": 7.8,
                "BLANK": 1,
                "INSTR": "After little bridge, STRAIGHT across onto Elmer Road"
            },
            {
                "cue": 0.2,
                "total": 8.0,
                "BLANK": 1,
                "INSTR": "Top of steep little hill, LEFT onto Newhall Rd"
            },
            {
                "cue": 0.6,
                "total": 8.6,
                "BLANK": 1,
                "INSTR": "T-intersection, RIGHT onto Shelburne Falls Rd (climb)"
            },
            {
                "cue": 1.4,
                "total": 10.0,
                "BLANK": 1,
                "INSTR": "LEFT onto Pine Hill Rd"
            },
            {
                "cue": 0.2,
                "total": 10.2,
                "BLANK": 1,
                "INSTR": "Bear LEFT, still Pine Hill Rd"
            },
            {
                "cue": 0.3,
                "total": 10.5,
                "BLANK": 1,
                "INSTR": "LEFT onto Pine Hill Rd - dirt"
            },
            {
                "cue": 0.6,
                "total": 11.1,
                "BLANK": 1,
                "INSTR": "Continue straight, ignore road closure sign"
            },
            {
                "cue": 1.3,
                "total": 12.4,
                "BLANK": 1,
                "INSTR": "Pavement: CAUTION, entering "
            },
            {
                "cue": 0.6,
                "total": 13.0,
                "BLANK": 1,
                "INSTR": "RIGHT at little grass triangle onto Upper Baptist Hill Rd"
            },
            {
                "cue": 0.4,
                "total": 13.4,
                "BLANK": 1,
                "INSTR": "RIGHT onto Ives Rd"
            },
            {
                "cue": 0.2,
                "total": 13.6,
                "BLANK": 1,
                "INSTR": "End of street, go LEFT (still Ives Rd)"
            },
            {
                "cue": 0.2,
                "total": 13.8,
                "BLANK": 1,
                "INSTR": "T-intersection, RIGHT onto Rt.116"
            },
            {
                "cue": 0.1,
                "total": 13.9,
                "BLANK": 1,
                "INSTR": "LEFT onto Burkeville Covered Brodge"
            },
            {
                "cue": 0.0,
                "total": 13.9,
                "BLANK": 1,
                "INSTR": "RIGHT off bridge onto Main Poland Rd; begin steep climb"
            },
            {
                "cue": 1.6,
                "total": 15.5,
                "BLANK": 1,
                "INSTR": "Summit, through cut in bedrock"
            },
            {
                "cue": 1.2,
                "total": 16.7,
                "BLANK": 1,
                "INSTR": "RIGHT onto North Poland Rd"
            },
            {
                "cue": 1.0,
                "total": 17.7,
                "BLANK": 1,
                "INSTR": "LEFT onto Bullitt Rd (rutted lane)"
            },
            {
                "cue": 1.0,
                "total": 18.7,
                "BLANK": 1,
                "INSTR": "Cross Route 116 onto Murray Rd (little dirt lane)"
            },
            {
                "cue": 0.2,
                "total": 18.9,
                "BLANK": 1,
                "INSTR": "LEFT at end of lane onto Hill Rd (no sign)"
            },
            {
                "cue": 0.2,
                "total": 19.1,
                "BLANK": 1,
                "INSTR": "Fork LEFT onto Burton Hill Rd"
            },
            {
                "cue": 0.2,
                "total": 19.3,
                "BLANK": 1,
                "INSTR": "Straight across Route 116 and through triangle onto Creamery Rd"
            },
            {
                "cue": 1.8,
                "total": 21.1,
                "BLANK": 1,
                "INSTR": "T-intersection, LEFT onto Norton Hill Rd"
            },
            {
                "cue": 0.1,
                "total": 21.2,
                "BLANK": 1,
                "INSTR": "Fork RIGHT onto Steady Lane (no sign)"
            },
            {
                "cue": 0.1,
                "total": 21.3,
                "BLANK": 1,
                "INSTR": "CHECKPOINT at Steady Lane Farm on left"
            },
            {
                "cue": 0.2,
                "total": 21.5,
                "BLANK": 1,
                "INSTR": "STRAIGHT across Route 112 onto Lilliput Rd"
            },
            {
                "cue": 0.7,
                "total": 22.2,
                "BLANK": 1,
                "INSTR": "T-intersection, RIGHT onto Bug Hill Rd (no sign)"
            },
            {
                "cue": 2.1,
                "total": 24.3,
                "BLANK": 1,
                "INSTR": "Continue straight: CAUTION, this intersection has no stop signs in any direction"
            },
            {
                "cue": 0.6,
                "total": 24.9,
                "BLANK": 1,
                "INSTR": "RIGHT onto Old Stage Rd"
            },
            {
                "cue": 1.3,
                "total": 26.2,
                "BLANK": 1,
                "INSTR": "Bear LEFT onto Hawley Rd (becomes Ashfield Rd 200 yds later at Hawley town line)"
            },
            {
                "cue": 1.1,
                "total": 27.3,
                "BLANK": 1,
                "INSTR": "T-intersection, RIGHT onto Plainfield Rd"
            },
            {
                "cue": 0.2,
                "total": 27.5,
                "BLANK": 1,
                "INSTR": "RIGHT onto Buckland Rd"
            },
            {
                "cue": 0.7,
                "total": 28.2,
                "BLANK": 1,
                "INSTR": "LEFT onto Pond Rd"
            },
            {
                "cue": 0.9,
                "total": 29.1,
                "BLANK": 1,
                "INSTR": "T-intersection, LEFT onto Forget Rd"
            },
            {
                "cue": 0.4,
                "total": 29.5,
                "BLANK": 1,
                "INSTR": "Heads up!  RIGHT turn at phone pole onto little jeep track - this is actually East Rd"
            },
            {
                "cue": 0.7,
                "total": 30.2,
                "BLANK": 1,
                "INSTR": "T-intersection, steep downhill - careful, very loose and rutted this year"
            },
            {
                "cue": 0.0,
                "total": 30.2,
                "BLANK": 1,
                "INSTR": "CAUTION: wicked downhill next mile - steep, rutted, narrow, stony, and maybe traffic"
            },
            {
                "cue": 1.9,
                "total": 32.1,
                "BLANK": 1,
                "INSTR": "Hard RIGHT downhill turn after little bridge, still East Rd"
            },
            {
                "cue": 0.6,
                "total": 32.7,
                "BLANK": 1,
                "INSTR": "Merge (right) onto East Hawley Rd - CAUTION for cars coming from left (no sign)"
            },
            {
                "cue": 0.7,
                "total": 33.4,
                "BLANK": 1,
                "INSTR": "T-intersection, LEFT onto South River Rd"
            },
            {
                "cue": 0.1,
                "total": 33.5,
                "BLANK": 1,
                "INSTR": "RIGHT, cross RR tracks onto Route 8A"
            },
            {
                "cue": 0.1,
                "total": 33.6,
                "BLANK": 1,
                "INSTR": "RIGHT onto Route 2 - please stay single file for next mile through town"
            },
            {
                "cue": 0.6,
                "total": 34.2,
                "BLANK": 1,
                "INSTR": "LEFT Route 8A - note Neighbor's Store before corner"
            },
            {
                "cue": 0.3,
                "total": 34.5,
                "BLANK": 1,
                "INSTR": "Bear LEFT onto Bissell Covered Bridge"
            },
            {
                "cue": 0.9,
                "total": 35.4,
                "BLANK": 1,
                "INSTR": "RIGHT onto Mountain Rd - 15% climb next 3/4 mile"
            },
            {
                "cue": 1.0,
                "total": 36.4,
                "BLANK": 1,
                "INSTR": "LEFT onto South Heath Rd - paved, super steep, becomes South Road at Heath town line"
            },
            {
                "cue": 1.0,
                "total": 37.4,
                "BLANK": 1,
                "INSTR": "T-intersection: LEFT onto Town Farm Rd"
            },
            {
                "cue": 0.0,
                "total": 37.4,
                "BLANK": 1,
                "INSTR": "CHECKPOINT on left: 222 South Rd, Heath. Open 8:15-11:30"
            },
  
            {
                "cue": "Stage 2: Heath to Green River Covered Bridge(28 miles, ~3000 ' total climbing)  This section has three long, steep hills, a 27 % wall, and almost no flat road until three miles from the checkpoint.",
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
                "total": 37.4,
                "BLANK": 1,
                "INSTR": "Continue on South Rd"
            },
            {
                "cue": 0.3,
                "total": 37.7,
                "BLANK": 1,
                "INSTR": "4-way intersection: LEFT on South Rd"
            },
            {
                "cue": 0.3,
                "total": 38.0,
                "BLANK": 1,
                "INSTR": "Fork STRAIGHT onto Royer Rd (dirt)"
            },
            {
                "cue": 0.2,
                "total": 38.2,
                "BLANK": 1,
                "INSTR": "Continue straight - road becomes gnarly"
            },
            {
                "cue": 1.1,
                "total": 39.3,
                "BLANK": 1,
                "INSTR": "T-intersection at bottom of descent, RIGHT onto Dell Rd, which turns into W. Main St"
            },
            {
                "cue": 0.7,
                "total": 40.0,
                "BLANK": 1,
                "INSTR": "Straight through center of town"
            },
            {
                "cue": 0.0,
                "total": 40.0,
                "BLANK": 1,
                "INSTR": "Continue straight on E. Main St"
            },
            {
                "cue": 0.3,
                "total": 40.3,
                "BLANK": 1,
                "INSTR": "Stay STRAIGHT onto Taylor Brook Rd (dirt)"
            },
            {
                "cue": 0.9,
                "total": 41.2,
                "BLANK": 1,
                "INSTR": "Straight through 4-way intersection; note pond on left 200 yds later"
            },
            {
                "cue": 1.3,
                "total": 42.5,
                "BLANK": 1,
                "INSTR": "Road turns to pavement and becomes Heath Rd at Colrain town line"
            },
            {
                "cue": 1.0,
                "total": 43.5,
                "BLANK": 1,
                "INSTR": "LEFT onto Maxam Rd - don't miss this turn"
            },
            {
                "cue": 0.4,
                "total": 43.9,
                "BLANK": 1,
                "INSTR": "Stay to the left (still Maxam Rd)"
            },
            {
                "cue": 0.6,
                "total": 44.5,
                "BLANK": 1,
                "INSTR": "T-intersection; LEFT onto Adamsville Rd - Catch your breath"
            },
            {
                "cue": 0.1,
                "total": 44.6,
                "BLANK": 1,
                "INSTR": "Fork LEFT onto Archambo Rd - 27% grade"
            },
            {
                "cue": 1.0,
                "total": 45.6,
                "BLANK": 1,
                "INSTR": "T-intersection at bottom of steep downhill, RIGHT onto White Lane"
            },
            {
                "cue": 0.1,
                "total": 45.7,
                "BLANK": 1,
                "INSTR": "T-intersection, RIGHT onto Adamsville Rd"
            },
            {
                "cue": 0.1,
                "total": 45.7,
                "BLANK": 1,
                "INSTR": "Quick LEFT onto Hillman Rd (some say the hardest climb on the course)"
            },
            {
                "cue": 1.6,
                "total": 47.3,
                "BLANK": 1,
                "INSTR": "T-intersection, LEFT onto Wilson Hill Rd (no sign)"
            },
            {
                "cue": 0.9,
                "total": 48.2,
                "BLANK": 1,
                "INSTR": "T-intersection, RIGHT onto Christian Hill Rd (no sign)"
            },
            {
                "cue": 0.2,
                "total": 48.4,
                "BLANK": 1,
                "INSTR": "Downhill T-intersection, RIGHT onto Thompson Rd (long downhill)"
            },
            {
                "cue": 1.9,
                "total": 50.3,
                "BLANK": 1,
                "INSTR": "T-intersection, RIGHT onto Route 112 S (Jacksonville Rd)"
            },
            {
                "cue": 1.2,
                "total": 51.5,
                "BLANK": 1,
                "INSTR": "LEFT onto Franklin Hill Rd"
            },
            {
                "cue": 0.2,
                "total": 51.7,
                "BLANK": 1,
                "INSTR": "LEFT after bridge onto tiny dirt lane (still Franklin Hill Rd)"
            },
            {
                "cue": 1.3,
                "total": 53.0,
                "BLANK": 1,
                "INSTR": "Bear left past rock walls (straight ahead is a jeep track)"
            },
            {
                "cue": 0.8,
                "total": 53.8,
                "BLANK": 1,
                "INSTR": "Downhill T-intersection, LEFT onto Amidon Rd (no sign)"
            },
            {
                "cue": 0.4,
                "total": 54.2,
                "BLANK": 1,
                "INSTR": "Stay straight, note sign for Amidon Rd"
            },
            {
                "cue": 0.4,
                "total": 54.6,
                "BLANK": 1,
                "INSTR": "LEFT onto Jacksonville Stage Rd (damaged sign is hard to see)"
            },
            {
                "cue": 2.5,
                "total": 57.1,
                "BLANK": 1,
                "INSTR": "Stay LEFT, still on Jacksonville Stage Rd"
            },
            {
                "cue": 0.9,
                "total": 58.0,
                "BLANK": 1,
                "INSTR": "RIGHT onto Old County Rd\nNote that the routes diverge. Don't follow riders straight."
            },
            {
                "cue": 0.7,
                "total": 58.7,
                "BLANK": 1,
                "INSTR": "RIGHT onto Deer Park Rd"
            },
            {
                "cue": 2.6,
                "total": 61.3,
                "BLANK": 1,
                "INSTR": "Bear right at bottom of hill, still on Deer Park Rd"
            },
            {
                "cue": 1.2,
                "total": 62.5,
                "BLANK": 1,
                "INSTR": "Stay left (at Josh Rd), still on Deer Park Rd"
            },
            {
                "cue": 0.2,
                "total": 62.7,
                "BLANK": 1,
                "INSTR": "CAUTION - very tight left turn onto wooden bridge"
            },
            {
                "cue": 0.1,
                "total": 62.8,
                "BLANK": 1,
                "INSTR": "T-intersection, RIGHT onto Green River Rd (GPS calls this Hinesburg Rd)"
            },
            {
                "cue": 1.0,
                "total": 63.8,
                "BLANK": 1,
                "INSTR": "RIGHT onto Green River Rd"
            },
            {
                "cue": 2.0,
                "total": 65.8,
                "BLANK": 1,
                "INSTR": "Fork RIGHT into covered bridge on Jacksonville Stage Rd"
            },
            {
                "cue": 0.0,
                "total": 65.8,
                "BLANK": 1,
                "INSTR": "Lunch Stop: Green River Covered Bridge. Open 10:30-16:00. Park bikes off road"
            },

            {
                "cue": "Stage 3: Green River Covered Bridge to Patten Hill(32 miles, 5000 ' total climbing)  This section has four hard climbs and then a monster, but there are flat stretches in between.",
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
                "total": 65.8,
                "BLANK": 1,
                "INSTR": "Head back through covered bridge"
            },
            {
                "cue": 0.1,
                "total": 65.9,
                "BLANK": 1,
                "INSTR": "Stay RIGHT onto [Jacksonville] Stage Rd (1-mile climb)"
            },
            {
                "cue": 2.4,
                "total": 68.3,
                "BLANK": 1,
                "INSTR": "T-intersection, RIGHT onto Sweet's Pond Rd (intersection is paved)"
            },
            {
                "cue": 1.2,
                "total": 69.5,
                "BLANK": 1,
                "INSTR": "Sweet's Pond Rd bends right up sharp hill (at Potash Rd)"
            },
            {
                "cue": 0.9,
                "total": 70.4,
                "BLANK": 1,
                "INSTR": "Stay to the left (at Abijah Prince Rd)"
            },
            {
                "cue": 2.3,
                "total": 72.7,
                "BLANK": 1,
                "INSTR": "Fork to the right, still on Sweet's Pond Rd"
            },
            {
                "cue": 0.3,
                "total": 73.0,
                "BLANK": 1,
                "INSTR": "Cross pavement onto Keat's Brook Rd"
            },
            {
                "cue": 1.0,
                "total": 74.0,
                "BLANK": 1,
                "INSTR": "RIGHT onto Simon Keet's Rd (bridge)"
            },
            {
                "cue": 0.5,
                "total": 74.5,
                "BLANK": 1,
                "INSTR": "Merge left onto Brattleboro Rd (pavement)"
            },
            {
                "cue": 0.2,
                "total": 74.7,
                "BLANK": 1,
                "INSTR": "RIGHT onto Greenfield Rd"
            },
            {
                "cue": "Cue",
                "total": "Total",
                "BLANK": 1,
                "INSTR": "Direction"
            },
            {
                "cue": 0.2,
                "total": 74.9,
                "BLANK": 1,
                "INSTR": "RIGHT onto Alexander Rd"
            },
            {
                "cue": 1.4,
                "total": 76.3,
                "BLANK": 1,
                "INSTR": "Top of climb, LEFT onto North County Rd"
            },
            {
                "cue": 2.1,
                "total": 78.4,
                "BLANK": 1,
                "INSTR": "T-intersection, RIGHT onto West Leyden Rd (sign visible over your shoulder)"
            },
            {
                "cue": 2.0,
                "total": 80.4,
                "BLANK": 1,
                "INSTR": "T-intersection, LEFT onto Green River Rd.\nNote optional water stop to the right, just after taking a right on North Green River Rd"
            },
            {
                "cue": 4.0,
                "total": 84.4,
                "BLANK": 1,
                "INSTR": "Hairpin RIGHT onto Nelson Rd (no other turns are close). \nNote that the routes diverge. Don't follow riders straight past this turn."
            },
            {
                "cue": 1.3,
                "total": 85.7,
                "BLANK": 1,
                "INSTR": "T-intersection, LEFT onto East Colrain Rd (no sign)"
            },
            {
                "cue": 1.2,
                "total": 86.9,
                "BLANK": 1,
                "INSTR": "T-intersection, RIGHT at major power line onto Van Nuys Rd, (no sign).\nNote that routes diverge. Don't follow riders left down Van Nuys Rd."
            },
            {
                "cue": 1.5,
                "total": 88.4,
                "BLANK": 1,
                "INSTR": "T-intersection at bottom of hill, LEFT onto Shelburne Line Rd"
            },
            {
                "cue": 0.5,
                "total": 88.9,
                "BLANK": 1,
                "INSTR": "RIGHT onto Jurek Rd (no sign, look for faded red barns on left after making turn)"
            },
            {
                "cue": 0.9,
                "total": 89.8,
                "BLANK": 1,
                "INSTR": "RIGHT onto Greenfield Rd (double-yellow line)"
            },
            {
                "cue": 0.7,
                "total": 90.5,
                "BLANK": 1,
                "INSTR": "Caution at bottom of descent - blind oncoming traffic behind church"
            },
            {
                "cue": 0.9,
                "total": 91.4,
                "BLANK": 1,
                "INSTR": "LEFT onto Route 112 south"
            },
            {
                "cue": 0.8,
                "total": 92.2,
                "BLANK": 1,
                "INSTR": "Stay left to remain on Route 112 "
            },
            {
                "cue": 0.3,
                "total": 92.5,
                "BLANK": 1,
                "INSTR": "Catamount store on right - good place to stop if you're bonking"
            },
            {
                "cue": 0.2,
                "total": 92.7,
                "BLANK": 1,
                "INSTR": "RIGHT onto Lyonsville Rd - cross Colrain Covered Bridge"
            },
            {
                "cue": 0.2,
                "total": 92.9,
                "BLANK": 1,
                "INSTR": "Bear LEFT at end of street (top of steep little rise) onto Foundry Village Rd"
            },
            {
                "cue": 0.3,
                "total": 93.2,
                "BLANK": 1,
                "INSTR": "LEFT turn just after cemetery onto Adamsville Rd"
            },
            {
                "cue": 0.8,
                "total": 94.0,
                "BLANK": 1,
                "INSTR": "RIGHT after green iron bridge back onto Route 112 south"
            },
            {
                "cue": 0.3,
                "total": 94.3,
                "BLANK": 1,
                "INSTR": "Fork LEFT before bridge onto Call Rd"
            },
            {
                "cue": 0.8,
                "total": 95.1,
                "BLANK": 1,
                "INSTR": "walk across tiny closed bridge"
            },
            {
                "cue": 0.9,
                "total": 96.0,
                "BLANK": 1,
                "INSTR": "LEFT onto Patten Hill Rd at triangle (sign is 60 ft later, on other fork of road) - big climb"
            },
            {
                "cue": 1.9,
                "total": 97.9,
                "BLANK": 1,
                "INSTR": "Rest Stop: Little Big House Gallery. Opens: 12:00; closes 18:00"
            },

            {
                "cue": "Stage 4: Patten Hill to Deerfield(13 miles, 1400 ' total climbing)  This section has a long down, then four smaller up - downs, then a long gnarly downhill to the finish.",
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
                "total": 97.9,
                "BLANK": 1,
                "INSTR": "Continue south on Patten Hill Rd"
            },
            {
                "cue": 0.5,
                "total": 98.4,
                "BLANK": 1,
                "INSTR": "RIGHT onto Square Lot Rd (tiny tree-lined lane, no sign)"
            },
            {
                "cue": 0.3,
                "total": 98.7,
                "BLANK": 1,
                "INSTR": "T-intersection, RIGHT onto Tower Rd (no sign)"
            },
            {
                "cue": 0.2,
                "total": 98.9,
                "BLANK": 1,
                "INSTR": "Bear LEFT onto Cooper Lane (sign only for Tower Rd)"
            },
            {
                "cue": 1.8,
                "total": 100.7,
                "BLANK": 1,
                "INSTR": "Pavement at bottom of long descent: CAUTION, full stop coming up"
            },
            {
                "cue": 0.1,
                "total": 100.8,
                "BLANK": 1,
                "INSTR": "T-intersection, LEFT; Caution: limited sight distance on left"
            },
            {
                "cue": 0.2,
                "total": 101.0,
                "BLANK": 1,
                "INSTR": "Straight across Route 2 onto Shelburne Center Rd (Caution with 55 mph traffic)"
            },
            {
                "cue": 0.7,
                "total": 101.7,
                "BLANK": 1,
                "INSTR": "RIGHT onto Barnard Rd"
            },
            {
                "cue": 0.1,
                "total": 101.8,
                "BLANK": 1,
                "INSTR": "LEFT onto Allen Rd"
            },
            {
                "cue": 0.2,
                "total": 102.0,
                "BLANK": 1,
                "INSTR": "T-intersection at bottom of steep hill, go RIGHT onto Bardwell's Ferry Rd"
            },
            {
                "cue": 0.0,
                "total": 102.0,
                "BLANK": 1,
                "INSTR": "Immediate LEFT at brick house onto South Shelburne Rd\nNote that 115K route diverges, don't follow riders straight past this turn."
            },
            {
                "cue": 1.2,
                "total": 103.2,
                "BLANK": 1,
                "INSTR": "Straight through 4-way intersection"
            },
            {
                "cue": 0.8,
                "total": 104.0,
                "BLANK": 1,
                "INSTR": "RIGHT onto Taylor Rd at bottom of hill - don't miss this turn"
            },
            {
                "cue": 1.8,
                "total": 105.8,
                "BLANK": 1,
                "INSTR": "LEFT onto Hawk's Rd (underneath power lines) - 115K riders rejoin to finish"
            },
            {
                "cue": 0.5,
                "total": 106.3,
                "BLANK": 1,
                "INSTR": "Continue straight at driveway"
            },
            {
                "cue": 0.2,
                "total": 106.5,
                "BLANK": 1,
                "INSTR": "CAUTION, gnarly descent, stones, washouts next mile"
            },
            {
                "cue": 1.8,
                "total": 108.3,
                "BLANK": 1,
                "INSTR": "Bear right, staying on pavement"
            },
            {
                "cue": 0.2,
                "total": 108.5,
                "BLANK": 1,
                "INSTR": "Bottom of sharp hill, RIGHT onto Upper Rd (no sign) - Dangerous intersection!"
            },
            {
                "cue": 1.0,
                "total": 109.5,
                "BLANK": 1,
                "INSTR": "T-intersection after concrete bridge, LEFT onto Stillwater Rd"
            },
            {
                "cue": 1.0,
                "total": 110.5,
                "BLANK": 1,
                "INSTR": "T-intersection, LEFT onto Mill Village Rd (no sign)"
            },
            {
                "cue": 0.9,
                "total": 111.4,
                "BLANK": 1,
                "INSTR": "FINISH at registration tent - be sure to CHECK IN.  Opens 12:30; closes 20:00 (food will be served until 9PM)"
            },


            {
                "cue": "OPTIONAL 5 - mile finishing loop(the original course from 2005)  This flat section charms with Old Deerfield",
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
                "INSTR": "Continue north on Mill Village Rd"
            },
            {
                "cue": 0.8,
                "total": 0.8,
                "BLANK": 1,
                "INSTR": "Bear LEFT onto Old Main St"
            },
            {
                "cue": 0.3,
                "total": 1.1,
                "BLANK": 1,
                "INSTR": "LEFT onto Albany Rd"
            },
            {
                "cue": 0.1,
                "total": 1.2,
                "BLANK": 1,
                "INSTR": "Immediate LEFT again to stay on Albany Rd"
            },
            {
                "cue": 0.2,
                "total": 1.4,
                "BLANK": 1,
                "INSTR": "End of street, RIGHT behind building onto Little Meadow Rd"
            },
            {
                "cue": 0.8,
                "total": 2.2,
                "BLANK": 1,
                "INSTR": "Continue STRAIGHT onto Pogues Hole Rd (corn tunnel)"
            },
            {
                "cue": 0.5,
                "total": 2.7,
                "BLANK": 1,
                "INSTR": "RIGHT onto farm track through the grass (Round Pond Rd)"
            },
            {
                "cue": 0.7,
                "total": 3.4,
                "BLANK": 1,
                "INSTR": "T intersection, RIGHT onto Old Ferry Rd"
            },
            {
                "cue": 0.1,
                "total": 3.5,
                "BLANK": 1,
                "INSTR": "Bear LEFT on Broughams Pond Rd / Old Ferry Rd"
            },
            {
                "cue": 0.1,
                "total": 3.6,
                "BLANK": 1,
                "INSTR": "Bend RIGHT onto Old Main St"
            },
            {
                "cue": 0.9,
                "total": 4.5,
                "BLANK": 1,
                "INSTR": "Bear RIGHT onto Mill Village Rd"
            },
            {
                "cue": 0.7,
                "total": 5.2,
                "BLANK": 1,
                "INSTR": "Return to registration/parking/dinner"
            }
        ]


    )

}

module.exports = global.myride;