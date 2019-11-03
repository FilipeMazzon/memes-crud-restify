import * as AuthModule from './auth.module';
import {Request, Response} from 'restify';
import {LoginDto, loginResponseDto} from './dto';
import {HttpCode} from '../../enums/httpCode.enum';

export const login = async (req: Request, res: Response): Promise<void> => {
    const loginDTO: LoginDto = req.body;
    const {username, password} = loginDTO;
    if (!username || !password)
        return res.send(HttpCode.unprocessableEntity, 'username e password sao obrigatorios');
    try {
        const data: loginResponseDto = await AuthModule.login(loginDTO);
        return await res.send(HttpCode.success, data);
    } catch (error) {
        return res.send(HttpCode.unauthorized, 'usuario ou senha invalidos');
    }
};
