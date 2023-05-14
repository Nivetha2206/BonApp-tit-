const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/CSS files', express.static('CSS files'));
app.use('/images', express.static('images'));
app.use('/data', express.static('data'));

const port = 5002;
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

app.listen(port, function () {
    console.log('Server running on port ' + port);
    console.log('Current directory: ' + __dirname);
});
