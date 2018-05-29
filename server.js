const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8000

app.use(express.static('dist'));

app.get('*', (req, res) => {
	res.sendFile(__dirname +'/index.html');
});

app.listen(PORT, () => {
	console.log('App is listening on localhost:' + PORT);
});