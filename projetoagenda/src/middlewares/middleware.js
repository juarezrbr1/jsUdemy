exports.middlewareGlobal = (req, res, next) => {
    // console.log('this is a global middleware')
    res.locals.umaVariavelLocal = 'Este é o valor da variavel local'
    next() // para que o middleware seja executado
}

exports.outroMiddleware = (req, res, next) => {
    next()
}

exports.checkCsrfError = (err, req, res, next) => {
    if (err && err.code === 'EBADCSRFTOKEN') {
        return res.render('404')
    }
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}