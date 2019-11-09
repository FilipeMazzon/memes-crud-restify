import * as AuthService from '../components/auth/auth.service';
import { HttpCode } from '../enums/httpCode.enum';

export const verifyToken = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) { return res.send(HttpCode.forbidden, 'Erro: Token não fornecido.'); }
  try {
    await AuthService.verifyToken(token);
    next();
  } catch (e) {
    return res.send(HttpCode.unauthorized, 'Erro: Token invalido.');
  }
};
