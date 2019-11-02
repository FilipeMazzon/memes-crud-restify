const axios = require('axios');
const axiosInstance = axios.create({
    baseURL: ' https://ec021-2019-2-av2-auth.herokuapp.com/auth',
});

const login = async (username, password) => {
    try {
        return await axiosInstance.post('/login', {username, password});
    } catch (e) {
        throw e;
    }
};

const verifyToken = async (token) => {
    try {
        return await axiosInstance.post('/validateToken', {}, {
            headers: {
                token
            }
        });
    } catch (e) {
        throw e;
    }
};

module.exports = {
    login,
    verifyToken
};
