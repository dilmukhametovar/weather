const express = require('express');
const app = express();

const HOST = '127.0.0.1';
const PORT = 8080;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('index');
});

app.listen(PORT, HOST, () => {
	console.log(`App running at ${HOST}:${PORT}`);
});
