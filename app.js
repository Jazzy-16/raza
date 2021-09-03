// Require Libraries
const express = require('express');

// App Setup
const app = express();
// const reviews = require('./controllers/reviews')(app);
// const comments = require('./controllers/comments')(app);

// Middleware
const exphbs = require('express-handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies
//Mongo 
const mongoose = require("mongoose");
var Schema = mongoose.Schema;
// const cookieParser = require('cookie-parser');
const checkAuth = require('./middleware/checkAuth');
require("dotenv").config();

// put this after middlewares ********************************
require('./controllers/auth.js')(app);
require('./controllers/api.js')(app);

// const {
//     allowInsecurePrototypeAccess,
//   } = require("@handlebars/allow-prototype-access");

//   app.set("view engine", "handlebars");
// // middlewares
// // set the templating engine -> handlebars
// app.engine("handlebars",exphbs ({
//     defaultLayout: "main",handlebars: allowInsecurePrototypeAccess(Handlebars),
//   })
// );

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'));

//render templates
app.get('/', (req, res) => {
    const currentUser = req.user

    res.render('home');
});

// app.get('/login', (req, res) => {

//     res.render('login');
// });

// app.get('/sign-up', (req, res) => {
//     console.log('sign-up');

//     res.render('sign-up');
// });

mongoose.connect(
    "mongodb+srv://jazzy:12345@cluster0.qdt3y.mongodb.net/Final_Project?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Connected to database...")
  );
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Start Server
app.listen(3000, () => {
    console.log('RAZA listening on port localhost:3000!');
});

module.exports = app;