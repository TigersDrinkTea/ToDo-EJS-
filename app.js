const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function (req,res){

// getDay gives a date as a number sunday@0 saturday@6
var today = new Date();
var currentDay = today.getDay();
var day = '';

var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'thursday', 'Friday', 'Saturday'];
day = daysOfWeek[currentDay];

  // here we are saying: render the file called list(.ejs), then we pass in to that file the content for variable kindOfDay in the template from the logic on this page. 
  //the point here is to do allot of logic and computing and then only pass over the result.
  //Using the EJS markers <%= %> in the list.ejs file in the views folder. HAVE TO BE CALLED LIST.EJS AND IN FOLDER CALLED VIEWS.
  res.render('list', {kindOfDay:day})

});

app.listen (3000, function () {
console.log('server running on port 3000')
});

// could have also used a switch statement on the currentDay and then just listed all the days and indexes, though when you see index you think array and its DRY.