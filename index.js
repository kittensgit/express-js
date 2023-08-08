const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './templates');

app.get('/', (req, res) => {
    res.render('index', { name: 'nika', id: 2 });
});
app.get('/about', (req, res) => {
    res.render('about');
});

let port = 3001;

app.listen(port, () => {
    console.log(`server run on: https://localhost:${port}`);
});
