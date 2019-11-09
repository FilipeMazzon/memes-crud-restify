import * as AuthService from './auth.service';
import { LoginDto, LoginResponseDto } from './dto';

export const login = async (loginDTO: LoginDto): Promise<LoginResponseDto> => {
  try {
    return await AuthService.login(loginDTO);
  } catch (e) {
    throw e;
  }
};
