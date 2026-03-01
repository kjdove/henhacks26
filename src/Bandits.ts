import {type Bandit} from "./App";

/**Name: string;
	Location: string;
	threatLevel: number;
	Description: string;
	Status: "Wanted" | "Caught";
	Photo: string; */

    
const Bandits: Bandit[] = [
    {Name: "Slick Silber", 
    threatLevel: 5, 
    Location: "Memorial Hall", 
    Description: "Last seen in Memorial 110 overloading the campus GPUs.", 
    Status: "Wanted", 
    Photo: "./silber_bandit.JPEG" },

    {Name: "Yeehaw Yarrington",
    threatLevel: 4,
    Location: "Gore Hall",
    Description: "You’ll hear Yeehaw Yarrington before you see her. Dramatic entrances. Loud exits. Possibly finger guns. Yarrington treats every hallway like a saloon showdown.",
    Status: "Wanted",
    Photo: "./yarrington_bandit.JPEG"
    },
    {Name: "Nasty Nazim",
    threatLevel: 3,
    Location: "Willard Hall",
    Description: "Nazim doesn’t chase chaos. Nazim plans it. If something oddly strategic happens… Nazim was three steps ahead. Prefers shadows, spreadsheets, and silent victories.",
    Status: "Wanted",
    Photo: "./nazim_bandit.JPEG"
    },
    {Name: "Ride ‘em Roosen",
    threatLevel: 2,
    Location: "Allison Hall",
    Description: "Last seen near Allison hall on his steed, galloping away at a suspicious speed.",
    Status: "Wanted",
    Photo: "./roosen_bandit.JPEG"
    },
    {
        Name: "Macho MattSap",
        threatLevel: 1,
        Location: "Lil Bob",
        Description: "Last seen in Lil Bob, Gym 2. Macho Matsap radiates “I could, but I won’t… unless.” Intimidating by posture alone. Known to claim entire spaces just by existing in them.",
        Status: "Caught",
        Photo: "./mattsap_bandit.JPEG"
    },
    {
        Name: "Lucky Liao",
        threatLevel: 3,
        Location: "Brown Lab",
        Description: "Lucky Liao last seen on the second floor of Brown Lab. Always seems to be around when something oddly technical happens. System glitch? Coincidence. Security camera reset? Also coincidence. Suspiciously fortunate timing.",
        Status: "Caught",
        Photo: "./liao_bandit.JPEG"
    },
    {
        Name: "Killer Kat",
        threatLevel: 2,
        Location: "Christina River",
        Description: " Last seen near the Christina River in Wilmington. Suspicious activity noted with the bridge openings malfunctioning. Coincidence? ",
        Status: "Caught",
        Photo: "./kat_bandit.JPEG"
    },
    {
        Name: "Bandit Bart",
        threatLevel: 4,
        Location: "Smith Hall",
        Description: "Last seen in Smith Hall. Suspected corgi robber from the New Castle animal shelter. ",
        Status: "Caught",
        Photo: "./bart_bandit.png"
    }
]

export default Bandits;