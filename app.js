/**
 * Created by alexchaparro on 3/17/15.
 */
var express = require('express');
var app = express();
var routes = require('./routes');

app.set('view engine', 'ejs');

app.locals.pagetitle = '';

//app.get('/', function(req, res){
//   res.render('default', {
//       title: 'Home',
//       classname: 'home',
//       users: ['Alex', 'Brandon', 'Vanessa']
//   });
//});
//
//app.get('/portfolio', function(req, res){
//    res.render('default', {
//        title: 'Portfolio',
//        classname: 'portfolio'
//    });
//});
//app.get('/contact', function(req, res){
//    res.render('default', {
//        title: 'Contact',
//        classname: contact
//    });
//});

app.use(express.static('public'));

app.get('/', routes.index);
app.get('/portfolio', routes.portfolio);
app.get('/contact', routes.contact);

app.get('*', function(req, res){
   res.send('Bad Route');
});



var server = app.listen(3000, function(){
   console.log('listening on port 3000');

   //Require the sweetcaptcha module and give it the credentials you were sent upon registration.
   var sweetcaptcha = new require('sweetcaptcha')(235723, '5d0150912bd74d200ef71f6cc5bb7c7b', '307af2781e22575d1bd08b6d171084d3');

// The page that your contact form is on should have a route like this
   app.get('/', function(req, res){

      //get sweetcaptcha html for the contact area
      sweetcaptcha.api('get_html', function(err,html){
         //Send the guts of the captcha to your template
         res.render('contact', { captcha : html });
      });

   });

});