////////// EXPRESS ///////////////////////////////////
const express = require("express");
const app = express();

///////// EXPRESS CONNECTION PORT ////////////////////
app.listen(8000, () => console.log("listening on port 8000"));

///////// POST SETUP              ////////////////////
app.use(express.urlencoded({extended: true}));

///////// EJS CONNECTION          //////////////////// 
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

///////// SESSION SETUP      /////////////////////////
const session = require('express-session');
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

//////// INDEX GET ROUTE /////////////////////////////
var count =0;
app.get('/', (req, res) => {
    count ++;
    res.render('index', {count: count});
})

/////////// DOUBLE POST REQUEST //////////////////////
app.post('/double', (req, res) => {
    count ++;
    res.redirect('/');
})

/////////// RESET POST REQUEST //////////////////////
app.post('/reset', (req, res) => {
    count =0;
    res.redirect('/');
})
