# project-way2vat
Way2Vat Test:

Project files i worked on: app.js, views/index.ejs, views/templates/header.ejs, views/page2.ejs, routes/page2.js;

To run project:
1. npm install (to install all dependecies)
2. npm start (to start the server)
3. open http://localhost:3000

About project:
I created an Express JS server and i requested angular github's repos api using module *request*. In project are 2 APIs of Angular, 
because a page shows only 100 elements and Angular has 174 repos. I used concat method with 2 arrays of objects to have just a single one. 
I sorted by repos creation dates, because objects are randomly ordered. 
In view i listed the needed repos with name, description and creation date.
On the second page i listed just 12 repos because of github query restriction (app to visualize PR queue activity for the angular.js project. currently the data is stored in the repo because of github query rate limits.)

More details are in code as comments.
