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
    Photo: "src/assets/silber_bandit.JPEG" },
    {Name: "Yeehaw Yarrington",
    threatLevel: 4,
    Location: "Gore Hall",
    Description: "You’ll hear Yeehaw Yarrington before you see her. Dramatic entrances. Loud exits. Possibly finger guns. Yarrington treats every hallway like a saloon showdown.",
    Status: "Wanted",
    Photo: "src/assets/yarrington_bandit.JPEG"
    },
    {Name: "Nasty Nazim",
    threatLevel: 3,
    Location: "Willard Hall",
    Description: "Nazim doesn’t chase chaos. Nazim plans it. If something oddly strategic happens… Nazim was three steps ahead. Prefers shadows, spreadsheets, and silent victories.",
    Status: "Wanted",
    Photo: "src/assets/nazim_bandit.JPEG"
    },
    {Name: "Ride ‘em Roosen",
    threatLevel: 2,
    Location: "Allison Hall",
    Description: "Last seen near Allison hall on his steed, galloping away at a suspicious speed.",
    Status: "Wanted",
    Photo: "src/assets/roosen_bandit.JPEG"
    },
    {
        Name: "Macho MattSap",
        threatLevel: 1,
        Location: "Lil Bob",
        Description: "Last seen in Lil Bob, Gym 2. Macho Matsap radiates “I could, but I won’t… unless.” Intimidating by posture alone. Known to claim entire spaces just by existing in them.",
        Status: "Caught",
        Photo: "src/assets/matsap_bandit.JPEG"
    },
    {
        Name: "Lucky Liao",
        threatLevel: 1,
        Location: "Brown Lab",
        Description: "Lucky Liao last seen on the second floor of Brown Lab. Always seems to be around when something oddly technical happens. System glitch? Coincidence. Security camera reset? Also coincidence. Suspiciously fortunate timing.",
        Status: "Caught",
        Photo: "src/assets/liao_bandit.JPEG"
    },
    {
        Name: "Killer Kat",
        threatLevel: 1,
        Location: "Christina River",
        Description: " Last seen near the Christina River in Wilmington. Suspicious activity noted with the bridge openings malfunctioning. Coincidence? ",
        Status: "Caught",
        Photo: "src/assets/kat_bandit.JPEG"
    },
    {
        Name: "Bandit Bart",
        threatLevel: 1,
        Location: "Smith Hall",
        Description: "Last seen in Smith Hall. Suspected corgi robber from the New Castle animal shelter. ",
        Status: "Caught",
        Photo: "src/assets/bart_bandit.JPEG"
    }
]

export default Bandits;