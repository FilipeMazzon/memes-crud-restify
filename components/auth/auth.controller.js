const AuthModule = require('./auth.module');

const login = async (req, res) => {
    const {username, password} = req.body;
    if (!username || !password)
        return res.send(422, 'username e password sao obrigatorios');
    try {
        const result = await AuthModule.login(username, password);
        return await res.json(result.data);
    } catch (error) {
        return res.send(401, 'usuario ou senha invalidos');
    }
};

module.exports = {
    login
};
