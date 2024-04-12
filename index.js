var quotes = require("quote-library");
var express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname));

app.get('/givequote', (req, res)=>{
  
res.json(`${JSON.stringify(quotes.randomQuote())}`);
  console.log(
JSON.stringify(quotes.randomQuote()));
});

app.get('/', (req, res)=>{
res.render('main');
})



app.listen(process.env.PORT || 5000);
