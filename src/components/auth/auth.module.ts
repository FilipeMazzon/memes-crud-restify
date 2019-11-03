import * as AuthService from './auth.service';
import {LoginDto, loginResponseDto} from "./dto";

export const login = async (loginDTO: LoginDto): Promise<loginResponseDto> => {
    try {
        return await AuthService.login(loginDTO);
    } catch (e) {
        throw e;
    }
};
