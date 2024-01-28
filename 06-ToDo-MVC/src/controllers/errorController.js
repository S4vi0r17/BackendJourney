const error404 = (req, res) => {
    res.render('error', {
        title: 404,
        message: 'Ruta no encontrada'
    })
}

export default {
    error404
}