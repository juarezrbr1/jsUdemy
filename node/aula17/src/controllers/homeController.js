exports.paginaInicial = (req, res) => {
    // req.flash('success', 'Seja bem vindo');
    console.log(req.flash('sucess'));
    res.render('index',
        {
            'titulo': 'Este é o meu titulo<span style="color: red;"> titulo</span>',
            'numeros': [1, 2, 3, 4, 5]
        }
    );
};

exports.trataPost = (req, res) => {
    res.send(req.body);
};