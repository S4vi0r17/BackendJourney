const error404 = (req, res) => {
    // res.status(404).render('error', {
    //     title: 'Error 404 Not Found',
    //     message: 'El recurso que estás buscando no existe.'
    // })
    res.status(404).json({
        code: 404,
        message: 'Not Found'
    })
}

export default {
    error404
}