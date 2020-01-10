const express = require('express');
const app = express();

const HOST = '127.0.0.1';
const PORT = 8080;

app.get('/', (req, res) => {
	res.send('Hello, world!');
});

app.listen(PORT, HOST, () => {
	console.log(`App running at ${HOST}:${PORT}`);
});
