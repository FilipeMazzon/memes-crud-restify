import axios from 'axios';

const baseUrl = 'https://ec021-2019-2-av2-auth.herokuapp.com/auth';

export const login = async (username, password) => {
    const data = {
        username,
        password
    };
    try {
        return await axios.post(
            `${baseUrl}/login`,
            data
        );
    } catch (e) {
        throw e;
    }
};

export const verifyToken = async (token) => {
    const config = {
        headers: {
            token
        }
    };
    const data = {};
    try {
        return await axios.post(
            `${baseUrl}/validateToken`,
            data,
            config
        );
    } catch (e) {
        throw e;
    }
};
