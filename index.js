const express = require('express');
const path = require('path');

const app = express();

// How we'll get files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put everything behind /api - #todo use router() for this
app.get('/api/kittens', (req, res) => {
	const kittens = ['Tonks', 'Pippin', 'Uli', 'Big Mango', 'Crema', 'Rosy', 'Mitzi', 'Sake'];
	res.json(kittens);
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Our app is listening on ${port}!!`);
