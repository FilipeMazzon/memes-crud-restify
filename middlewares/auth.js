const AuthModule = require('../components/auth/auth.module');

const verifyToken = async (req, res, next) => {
    const {token} = req.headers;
    if (!token) return res.send(403, "Erro: Token não fornecido.");
    try {
        await AuthModule.verifyToken(token);
        next()
    } catch (e) {
        return await res.send(401, "Erro: Token invalido.");
    }
};

module.exports = {
    verifyToken
};
