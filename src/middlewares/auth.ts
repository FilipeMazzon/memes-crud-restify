import * as AuthService from '../components/auth/auth.service';

export const verifyToken = async (req, res, next) => {
    const {token} = req.headers;
    if (!token) return res.send(403, "Erro: Token não fornecido.");
    try {
        await AuthService.verifyToken(token);
        next()
    } catch (e) {
        return res.send(401, "Erro: Token invalido.");
    }
};
