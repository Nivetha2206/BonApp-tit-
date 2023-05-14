const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const { connectToDb, getDb } = require('./db');
let db;
const port = 5002; // Define the port variable
// DB CONNECTION
connectToDb((err) => {
  if (!err) {
    
    app.listen(port, function () {
      console.log('Server running on port ' + port);
      console.log('Current directory: ' + __dirname);
    });
    db = getDb();
  }
});

app.get('/Datas', (req, res) => {
  let food = [];

  db.collection('recipies')
    .find()
    .sort()
    .forEach((foodItem) => food.push(foodItem)) // Fix the array name to "food"
    .then(() => {
      res.status(200).json(food); // Respond with the "food" array
    })
    .catch(() => {
      res.status(500).json({ error: 'Could not fetch the documents' });
    });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/CSS files', express.static('CSS files'));
app.use('/images', express.static('images'));
app.use('/data', express.static('data'));

app.set('view engine', 'ejs');

const path = require('path');
// ...

app.set('views', path.join(__dirname, 'views'));

app.get('/', function (req, res) {
  res.render('login.ejs');
});

app.get('/login', function (req, res) {
  res.render('login.ejs');
});

app.get('/template', function (req, res) {
  res.render('template.ejs');
});

app.post('/login', function (req, res) {
  let email = req.body.email;
  let password = req.body.password;
  if (email === 'nivetha@ssn' && password === 'admin') {
    res.redirect('/template');
  } else {
    res.redirect('/login');
  }
});

app.get('/register', function (req, res) {
  res.render('register.ejs');
});

app.get('/Post', function (req, res) {
  res.render('Post.ejs');
});

app.get('/Profile', function (req, res) {
  res.render('Profile.ejs');
});

// console.log('Server running on port ' + port);
// console.log('Current directory: ' + __dirname);
