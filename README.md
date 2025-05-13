### Cat Park | Smart Parking Safety Heatmap

Data-driven web app identifying low-crime parking zones across Vancouver

**Key Features:**  
- 📍 Crime Visualization - Mapped 500,000+ crime records to parking locations using PostGIS
- 🚗 Interactive Filters - Toggle crime categories (theft/vandalism/etc.) in real-time
- 🛡️ Safety Scoring - Algorithm weights recency and severity of nearby incidents
- ⚡ High-Performance - Golang backend processes spatial queries in <100ms

Tech Stack:
`React.js` | `Golang` | `Postgres/PostGIS` | `Google Maps API`

If you can't park, use cat_park! This project was created by Chris and Thomas (CaT) to solve the problems of finding parking in metro Vancouver.         Using the Vancouver Police Department's open data set, we created an
        interactive heat map using 534,506 records of crimes. Our backend is
        made with Golang and each click on the map sends a spatial query request
        into our Postgres with Postgis database and fetches and renders a custom
        cluster marker set for all parking meters within 500 meters of the
        click.

## Demo:

- Making a radial query of 350 meters(Adjustable) on click:
  !["Radial Queries!"](https://github.com/ChrisnNg/cat_park/blob/master/client/public/gifs/RadialQuery.gif?raw=true)
- Parking Clusterer for less clutter:
  !["Clusterer!"](https://github.com/ChrisnNg/cat_park/blob/master/client/public/gifs/ParkingClusterer.gif?raw=true)
- Crime heat map with different options:
  !["Crime!"](https://github.com/ChrisnNg/cat_park/blob/master/client/public/gifs/CrimeHeatMap.gif?raw=true)

## Usage:

- Click on a area within Vancouver to see all parking meters within a diameter of 300 meters.
- Toggle on the crime heatmap with the button in the bottom left corner. By default, the heatmap will render all crimes. You may however change it to different types of crime via the buttons beside.

## FAQ

- <em> Why are the parking spots generated on click instead of generating all of them at once? </em>

  - The reason for this is because we were concerned that rendering all of them would clutter the screen and make it difficult to see the markers, even with the marker cluster component we created. Additionally, because each one is actually a marker and renders the custom image we used for the marker icon even without zooming in, it slows down the app too much.

- <em> Why Golang? </em>

  - In tackling the final project, we saw two pathways to impressing employers and making our application stand out. One used the languages we learned within the course and furthering the depth of knowledge we had within it. The other tackled learning a new language we haven't touched and immediately implementing it within our project to show our capabilities to learn.

- <em> Why React? </em>

  - React was a language we learned during the Lighthouse Labs bootcamp and I had wanted to expand and improve on that before dipping my toes into a different language.
