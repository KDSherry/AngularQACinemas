const express = require('express');
const router = express.Router();
const Showing = require('./models/showing');
const Movie = require('./models/movie');

const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

const ShowingData = require('./create-db-jsons/showings.json');
const MovieData = require('./create-db-jsons/moviedetails.json');

//----Mongodb database!!----
//Connect to database 'meanauth'
mongoose.connect(config.database);

// On connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database '+config.database);
});

// On error
mongoose.connection.on('error', (err) => {
    console.log('Database error: '+err);
});
//----------------------------
const app = express();

//ROUTES FOLDER
const users = require('./routes/users');
const routes = require('./routes/api');

//---Middleware---
//CORS middlware
app.use(cors());
//Set static folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

//Passport
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

//Routes defined in routes folder, at /users/xxx
app.use('/users', users);
app.use('/api', routes);
//----------------------------

// Index page route!
app.get('/', (req,res) =>{
    res.send('Invalid endpoint');
});

//Every route aside from specified ones goes to index.html file
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/index.html'));
// });



Showing.create(ShowingData).then(console.log('showings created 1')).catch(console.log('catching'));
Movie.create(MovieData).then(console.log('movies created 2')).catch(console.log('catching'));