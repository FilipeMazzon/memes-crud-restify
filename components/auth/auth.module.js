const axios = require('axios');

const axiosInstance = axios.create({
    baseURL: ' https://ec021-2019-2-av2-auth.herokuapp.com/auth',
});

const login = async (username, password) => {
    const data = {
        username,
        password
    };
    try {
        return await axiosInstance.post(
            '/login',
            data);
    } catch (e) {
        throw e;
    }
};

const verifyToken = async (token) => {
    const config = {
        headers: {
            token
        }
    };
    const data = {};
    try {
        return await axiosInstance.post(
            '/validateToken',
            data,
            config
        );
    } catch (e) {
        throw e;
    }
};

module.exports = {
    login,
    verifyToken
};
