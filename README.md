# cat_park

cat_park was created by Chris and Thomas (CaT) to solve the problems of finding parking in metro Vancouver. Included in this app are all the parking meters in Vancouver and a crime heatmap to see where it is safer to park relative to the area. This app was designed with mobile useage in mind and thus includes responsive UI.

## Usage:

- Click on a area within Vancouver to see all parking meters within a diameter of 300 meters.
- Toggle on the crime heatmap with the button in the bottom left corner. By default, the heatmap will render all crimes. You may however change it to different types of crime via the buttons beside.

## Future plans

This app was built within two weeks for Chris and Thomas' Final project for Lighthouse Labs. As so, we plan to continue working on it to fully implement our ideas that we have planned out previously.

### Roadmap

1. user account creation
2. favorite spots for each user
3. deployment on Heroku and Netlify
4. testing

## FAQ

- <em> Why are the parking spots generated on click instead of generating all of them at once? </em>

* The reason for this is because we were concerned that rendering all of them would clutter the screen and make it difficult to see the markers, even with the marker cluster component we created. Additionally, because each one is actually a marker and renders the custom image we used for the marker icon even without zooming in, it slows down the app too much.

- <em> Why Golang? </em>

* In tackling the final project, we saw two pathways to impressing employers and making our application stand out. One used the languages we learned within the course and furthering the depth of knowledge we had within it. The other tackled learning a new language we haven't touched and immediately implementing it within our project to show our capabilities to learn.

- <em> Why React? </em>

* React was a language we learned during the Lighthouse Labs bootcamp and I had wanted to expand and improve on that before dipping my toes into a different language.
