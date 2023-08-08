const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/templates/index.html');
});
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/templates/about.html');
});

let port = 3001;

app.listen(port, () => {
    console.log(`server run on: https://localhost:${port}`);
});
