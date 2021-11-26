const path = require('path'); 
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars')
var hbs = handlebars.create({ extname: 'hbs'});;
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Http logger
app.use(morgan('combined'));

// TEMPLATE ENGINE
app.engine('hbs', hbs.engine )
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, 'resources/views')); 




app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});