exports.middlewareGlobal = (req, res, next) => {
    // console.log('this is a global middleware')
    res.locals.umaVariavelLocal = 'Este é o valor da variavel local'
    next() // para que o middleware seja executado
}