exports.middlewareGlobal = (req, res, next) => {
    // console.log('this is a global middleware')
    next() // para que o middleware seja executado
}