/**
 * Created by alexchaparro on 3/17/15.
 */
var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
   res.render('default', {
       title: 'Home',
       classname: 'home',
       users: ['Alex', 'Brandon', 'Vanessa']
   });
});

app.get('/portfolio', function(req, res){
    res.render('default', {
        title: 'Portfolio',
        classname: 'portfolio'
    });
});
app.get('/contact', function(req, res){
    res.render('default', {
        title: 'Contact',
        classname: contact
    });
});

app.get('/me', function(req, res){
   res.send('@London804');
});

app.get('*', function(req, res){
   res.send('Bad Route');
});



var server = app.listen(3000, function(){
   console.log('listening on port 3000');
});