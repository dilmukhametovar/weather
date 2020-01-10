const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

const HOST = '127.0.0.1';
const PORT = 8080;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req, res) => {
	res.render('index', {weather: null, error: null});
});

app.post('/', async (req, res) => {
	let city = req.body.city;
	let url = 'http://api.openweathermap.org/data/2.5/weather';
	let options = {
		params: {
			q: city,
			appid: '11c0d3dc6093f7442898ee49d2430d20',
			units: 'metric'
		}
	}
	try {
		let data = (await axios.get(url, options)).data;
		console.log(data)
		if (data == undefined) throw new Error();
		let weatherText = `It's ${data.main.temp} degrees in ${data.name}!`;
		res.render('index', {weather: weatherText, error: null});
	} catch (err) {
		console.log(err);
		res.render('index', {weather: null, error: 'Error, please try again!'});
	}
});

app.listen(PORT, HOST, () => {
	console.log(`App running at ${HOST}:${PORT}`);
});
