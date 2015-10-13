
#Startup Matchmaker

Startup Matchmaker is a web app that allows project managers to create teams of talented individuals who build apps.

##User Experience

The app allows Users to sign up to the service. Users login to Team View. Team View lists all available users who want to be in a Team. The User is able to create a team, drag and drop other users into the Team. The User should also be able to logout. The web app also has a splash page that contains marketing materials.

##Development

Use a combination of HTML, CSS, and JavaScript to build this web app.

We recommend separating the concerns of your application using the Model, View, Controller paradigm.

The User Model is defined by the REST API. It will be up to your team to design the Model for a Team. Teams require a title and list of users.

Views can be separated into html documents, like so:

index.html
views/login.html
views/team.html
views/signup.html

Controllers can either be handled by MV* like Angular or JavaScript Constructors and Prototypes to define the logic of the web app. Consider making Controllers for each View and Component, like so:

js/components/user.js
js/components/logout.js
js/components/login.js
js/components/signup.js
js/components/team.js
js/controllers/login-view-controller.js
js/controllers/signup-view-controller.js
js/controllers/team-view-controller.js


##REST API

The back end team has created a REST API for you to develop against. The REST API is available at http://vvvvvv.club/api/

The following REST endpoints are available.

POST http://vvvvvv.club/api/login
GET http://vvvvvv.club/api/logout
GET http://vvvvvv.club/api/user
POST http://vvvvvv.club/api/user

Documentation is available at http://vvvvvv.club/docs

##Design

Screenshots of the four views are available in the comps folder.

The web app should use a flexible layout for viewing on multiple monitors. Use percentages as opposed to fixed pixel widths for most sizing.

You may procedurally draw the backgrounds with the Trianglify library http://qrohlf.com/trianglify/ or use the Trianglify Generator web app to download SVG files. http://qrohlf.com/trianglify-generator/

Colors used in the comps:

#BC261D
#DCE0D9
#851513
#FFFFFF


Fonts Sourced From Google Fonts:
* Open Sans
