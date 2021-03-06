const express = require('express');
const app = express();
const path = require('path');	

app.use(express.static(path.join(__dirname + '/app')));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(3000, function () {
	console.log('localhost:3000');
});