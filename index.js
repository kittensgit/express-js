const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('hello express');
});

let port = 3001;

app.listen(port, () => {
    console.log(`server run on: https://localhost:${port}`);
});
