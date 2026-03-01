## Inspiration
We were inspired by wanted boards in police stations. We wanted to simulate this so that sheriffs can keep an area safe by informing the public of wanted and caught bandits in their area. 

## What it does
With our site, sheriffs can log onto a password protected page to add wanted and/or caught bandits to their corresponding pages. Additionally, townsfolk can log on and view these bandits. Both kinds of users have the ability to view a map that displays where bandits were last seen as well as see how close their current location is to the bandits. 

## How we built it
We used TypeScript and React to build the foundations of our site, Firestore from Firebase for our backend database, and Mozilla's Geolocation API to get user's current locations. 

## Challenges we ran into
The first challenge we ran into was saving our data. We first wanted to use LocalStorage but we ran into difficulties so we all agreed to switch to a backend database instead. Additionally, we faced challenges with CSS, primarily rendering our images on the deployed site.  

## Accomplishments that we're proud of
We are proud of our site's creativity and design, team chemistry and work ethic, and how much we accomplished in 24 hours. Our proudest accomplishments are the scrollable images on the dashboards, the backend database, and implementing the Geolocation API. 

## What we learned
We learned how to utilize CSS to make our site more aesthetically and visually pleasing and how to implement APIs and a backend databases in our codebase.

## What's next for Bandit Board
For our future implementations, we want the public to be able to upvote/downvote wanted bandits so they'd be able to adjust their threat levels. This way, sheriffs would arrest the bandits that the public is most threatened by and a ' judge by a jury of peers' would be implemented for the bandits. Another implementation is to have an interactive map. We want users to be able to click on a bandit's image on the map and then their bandit info card would display. Lastly, we want sheriffs to be able to to manage the status of bandits. 
