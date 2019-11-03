import * as AuthService from './auth.service';

export const login = async (username, password) => {
    try {
        return await AuthService.login(username, password);
    } catch (e) {
        throw e;
    }
};
