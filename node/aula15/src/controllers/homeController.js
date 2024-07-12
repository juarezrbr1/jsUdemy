exports.paginaInicial = (req, res) => {
    // req.flash('success', 'Seja bem vindo');
    console.log(req.flash('sucess'));
    res.render('index');
};

exports.trataPost = (req, res) => {
    res.send(req.body);
};