import MemeRepository from './meme.repository';
import { MemeCreateDto, MemeFindFilterDto, MemePatchDto } from './dto';
import { IMeme } from './meme.interface';

export const find = async (memeFindFilterDto: MemeFindFilterDto) => {
  return MemeRepository.find(memeFindFilterDto);
};

export const findById = async (id: string): Promise<IMeme> => {
  return MemeRepository.findById(id, {});
};

export const create = async (memeCreateDto: MemeCreateDto): Promise<IMeme> => {
  return MemeRepository.create(memeCreateDto);
};

export const updateById = async (id: string, memePatchDTO: MemePatchDto): Promise<IMeme> => {
  return MemeRepository.updateById(id, memePatchDTO);
};

export const deleteById = async (id: string) => {
  return MemeRepository.deleteById(id);
};
