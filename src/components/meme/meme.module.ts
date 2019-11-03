import { Meme } from './meme.schema';
import { MemeCreateDto, MemePatchDto } from './dto';
import { IMeme } from './meme.interface';

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

export const find = async (): Promise<IMeme[]> => {
  return Meme.find().lean();
};

export const findById = async (id: string): Promise<IMeme> => {
  const meme: IMeme = Meme.findById(id).lean();
  if (!meme) {
    throw new Error('not found');
  }
  return meme;
};
