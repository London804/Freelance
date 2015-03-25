exports.index =  function(req, res){
    res.render('default', {
        title: 'Home',
        classname: 'home',
        users: ['Alex', 'Brandon', 'Vanessa']
    });
};

exports.portfolio = function(req, res){
    res.render('default', {
        title: 'Portfolio',
        classname: 'portfolio'
    });
};
exports.contact = function(req, res){
    //Require the sweetcaptcha module and give it the credentials you were sent upon registration.
    var sweetcaptcha = new require('sweetcaptcha')(235723, '5d0150912bd74d200ef71f6cc5bb7c7b', '307af2781e22575d1bd08b6d171084d3');
    sweetcaptcha.api('get_html', function(err,html) {
        res.render('contact', {
            title: 'Contact',
            classname: 'contact',
            captcha: html
        });
    });

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


};