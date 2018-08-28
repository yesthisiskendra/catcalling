const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Compliment = require('./models/compliment');
const secrets = require('./secrets.js');

const app = express();

// How we'll get files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(secrets['dbUri']);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));

// Put everything behind /api - #todo use router() for this
app.get('/api/compliments', (req, res) => {
  Compliment.find((err, compliment) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: compliment });
  }).sort('complimentId');
});

app.get('/api/kittens', (req, res) => {
	const kittens = ['Tonks', 'Pippin', 'Uli', 'Big Mango', 'Crema', 'Rosie', 'Mitzi', 'Sake'];
	res.json(secrets);
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Our app is listening on ${port}!!`);
