import * as  MemeModule from './meme.module';
import { Request, Response } from 'restify';
import { HttpCode } from '../../enums/httpCode.enum';
import { MemeCreateDto, MemeFindFilterDto, MemePatchDto } from './dto';
import { IMeme } from './meme.interface';

export const getMemes = async (req: Request, res: Response): Promise<void> => {
  const filter: MemeFindFilterDto = req.query;
  try {
    const memes: IMeme[] = await MemeModule.find(filter);
    return res.send(HttpCode.success, memes);
  } catch (error) {
    return res.send(HttpCode.internalError, error);
  }
};

export const getMemeById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const meme: IMeme = await MemeModule.findById(id);
    if (!meme) {
      return res.send(HttpCode.notFound, `meme with id:${id} not found`);
    }
    return res.send(HttpCode.success, meme);
  } catch (error) {
    return res.send(HttpCode.internalError, error);
  }
};

export const createMeme = async (req: Request, res: Response): Promise<void> => {
  const memeCreateDto: MemeCreateDto = req.body;
  const { titulo, descricao, ano } = memeCreateDto;
  if (!titulo || !descricao || !ano) {
    return res.send(
      HttpCode.unprocessableEntity,
      'necessita ter todos os campos: titulo, descricao e ano',
    );
  }
  try {
    const meme: IMeme = await MemeModule.create(memeCreateDto);
    return res.send(HttpCode.created, meme);
  } catch (error) {
    return res.send(HttpCode.internalError, error);
  }
};

export const updateMeme = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const memePatchDto: MemePatchDto = req.body;
  const { titulo, descricao, ano } = memePatchDto;
  if (!titulo && !descricao && !ano) {
    return res.send(
      HttpCode.unprocessableEntity,
      'necessita alterar algum campo: titulo, descricao ou ano',
    );
  }
  try {
    const meme: IMeme = await MemeModule.updateById(id, memePatchDto);
    if (!meme) {
      return res.send(HttpCode.notFound, `meme with id:${id} not found`);
    }
    return res.send(HttpCode.success, meme);
  } catch (error) {
    return res.send(HttpCode.internalError, error);
  }
};

export const deleteMeme = async (req, res): Promise<void> => {
  try {
    const { id } = req.body;
    const wasDelete = await MemeModule.deleteById(id);
    const { deletedCount } = wasDelete;
    return res.send(
      deletedCount ? HttpCode.success : HttpCode.notFound,
      '');
  } catch (error) {
    return res.send(HttpCode.internalError, error);
  }

};

