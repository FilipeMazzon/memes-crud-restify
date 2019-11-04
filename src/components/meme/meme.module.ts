import { Meme } from './meme.schema';
import { MemeCreateDto, MemeFindFilterDto, MemePatchDto } from './dto';
import { IMeme } from './meme.interface';

export const find = async (memeFindFilterDto: MemeFindFilterDto): Promise<IMeme[]> => {
  const { titulo, descricao, ano } = memeFindFilterDto;
  const match: any = {};
  if (titulo) {
    match.titulo = { $regex: titulo };
  }
  if (descricao) {
    match.descricao = { $regex: descricao };
  }
  if (ano) {
    match.ano = ano;
  }
  const sortConfig = {
    updatedAt: -1,
  };
  return Meme.find(match).sort(sortConfig).lean();
};

export const findById = async (id: string): Promise<IMeme> => {
  return Meme.findById(id).lean();
};

export const create = async (memeCreateDto: MemeCreateDto): Promise<IMeme> => {
  return Meme.create(memeCreateDto);
};

export const updateById = async (id: string, memePatchDTO: MemePatchDto): Promise<IMeme> => {
  const match = {
    _id: id,
  };
  const update = {
    $set: memePatchDTO,
  };
  const config = {
    //this return the new object after update, otherwise will return the old without the changes
    new: true,
  };
  return Meme
    .findOneAndUpdate(match, update, config)
    .lean(); //lean is for not create a mongoose object unnecessary. boost 3~~5x more speed.
};

export const deleteById = async (id: string) => {
  const match = {
    _id: id,
  };
  return Meme.deleteOne(match);
};
