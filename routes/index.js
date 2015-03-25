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
    var sweetcaptcha = new require('sweetcaptcha')(appId, appKey, appSecret);
    sweetcaptcha.api('get_html', function(err,html) {
        res.render('contact', {
            title: 'Contact',
            classname: 'contact',
            captcha: html
        });


    });

};



