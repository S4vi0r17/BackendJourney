const error404 = (req, res) => {
    res.status(404).json({
        message: 'Page not found'
    });
}

export default {
    error404
}