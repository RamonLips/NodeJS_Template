const express = require('express');
const ejs = require('ejs');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.use(express.json());

app.get('/', async function (req, res) {
  res.render('index');
});

app.post('/test', async function (req, res) {
    let input = req.body.input
    console.log(`Input: ${input}`);
    res.send({ txt: input });
});

let port = 3000
app.listen(port, () => {
    console.log(`Server connected on port ${port}`);
});