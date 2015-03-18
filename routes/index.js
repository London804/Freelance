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
    res.render('default', {
        title: 'Contact',
        classname: 'contact'
    });
};