const express = require('express');
const bodyParser = require('body-parser');

const app = express();

var items = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));


app.get('/', function (req, res) {

    var today = new Date();
    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    };

    var day = today.toLocaleDateString('en-US', options);

    res.render('list', {
        kindOfDay: day,
        newListItem: items
    })

});

app.post('/', function (req, res) {
    var item = req.body.newItem;
    items.push(item);

    res.redirect('/');
});

app.listen(3000, function () {
    console.log('server running on port 3000')
});

// We have an input 'newItem' from user in ejs
//this is then saved to the server and put to variable 'item'
//'item' is then added to the array 'items' that make up the to do list in app.js
// use a for loop to iterate creatin of new li items in the .ejs file with the content that the user submitted to our server served back to client.