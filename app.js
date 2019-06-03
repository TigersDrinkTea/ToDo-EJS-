const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let items = [];
let workItems = [];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('public'));
//..............................................................


app.get('/', function (req, res) {

    let today = new Date();
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    };
    let day = today.toLocaleDateString('en-US', options);

    res.render('list', {
        listTitle: day,
        newListItem: items
    })
});


app.post('/', function (req, res) {
    let item = req.body.newItem;

    if (req.body.list === 'Work List') {

        workItems.push(item);
        res.redirect('/work');

    } else {

        items.push(item);

        res.redirect('/');
    }
});

app.get('/work', function (req, res) {
    res.render('list', {
        listTitle: 'Work List',
        newListItem: workItems
    })
});

app.get('/about', function (req, res) {
    res.render('about');
})

app.post('/', function (req, res) {
    let deleteButton = req.body.delete;
    deleteButton.addEventListener('click', function () {
        items.length = 0;
    });

    res.redirect('/');
});
//...................................................................

app.listen(3000, function () {
    console.log('server running on port 3000')
});


// We have an input 'newItem' from user in ejs
//this is then saved to the server and put to letiable 'item'
//'item' is then added to the array 'items' that make up the to do list in app.js
// use a for loop to iterate creatin of new li items in the .ejs file with the content that the user submitted to our server served back to client.