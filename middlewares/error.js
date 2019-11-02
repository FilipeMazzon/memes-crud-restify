const error404 = async (req, res) => {
    return res.send(404, 'Pagina nao encontrada')
};

module.exports = {
    error404
};
