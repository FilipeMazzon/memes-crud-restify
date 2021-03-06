import axios from 'axios';

import { LoginDto, LoginResponseDto, ValidateTokenResponseDto } from './dto';

const baseUrl = 'https://ec021-2019-2-av2-auth.herokuapp.com/auth';

export const login = async (loginDTO: LoginDto): Promise<LoginResponseDto> => {
  const result = await axios.post(
    `${baseUrl}/login`,
    loginDTO,
  );

  return result.data;
};

export const verifyToken = async (token): Promise<ValidateTokenResponseDto> => {
  const config = {
    headers: {
      token,
    },
  };
  const data = {};

  const result = await axios.post(
    `${baseUrl}/validateToken`,
    data,
    config,
  );

  return result.data;
};
