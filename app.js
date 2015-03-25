/**
 * Created by alexchaparro on 3/17/15.
 */
var express = require('express');
var app = express();
var routes = require('./routes');
var bodyParser = require('body-parser');

var server = app.listen(3000, function(){
   console.log('listening on port 3000');


});

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
app.use(bodyParser.raw());
app.get('/', routes.index);
app.get('/portfolio', routes.portfolio);
app.get('/contact', routes.contact);

app.get('*', function(req, res){
   res.send('Bad Route');
});

//Require the module
var nodemailer = require('nodemailer');

//Create the reusable transport
var transporter = nodemailer.createTransport({
   service: 'Gmail',
   auth: {
      user: 'london804i@gmail.com',
      pass: 'myPassword'
   }
});

//Create the route that does all the magic when your contact form submit button is pressed

app.post('/contact', function(req, res) {
   var sweetcaptcha = new require('sweetcaptcha')(appId, appKey, appSecret);


   console.log( req.body, req.params );

   //Validate captcha
   sweetcaptcha.api('check', {sckey: req.body["sckey"], scvalue: req.body["scvalue"]}, function(err, response){
      if (err) return console.log(err);

      if (response === 'true') {
         // valid captcha

         // setup e-mail data with unicode symbols
         var mailOptions = {
            from: 'Alex <london804i@gmail.com>', // sender address
            to: 'alexechaparro@gmail.com', // list of receivers. This is whoever you want to get the email when someone hits submit
            subject: 'New email from your website contact form', // Subject line
            text: req.body["contact-form-message"] + ' You may contact this sender at: ' + req.body["contact-form-mail"] // plaintext body

         };

         // send mail with defined transport object
         transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
               console.log(error);
            } else {
               console.log('Message sent: ' + info.response);
            }
         });
         //Success
         res.send("Thanks! We have sent your message.");

      }
      if (response === 'false'){
         // invalid captcha
         console.log("Invalid Captcha");
         res.send("Try again");

      }
   });

});



