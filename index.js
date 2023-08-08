const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('hello express');
});
app.get('/about', (req, res) => {
    res.send('about text');
});

let port = 3001;

app.listen(port, () => {
    console.log(`server run on: https://localhost:${port}`);
});
