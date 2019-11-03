import MemeModal from './meme.schema';
import {MemeCreateDto, MemePatchDto} from './dto';
import {Meme} from "./meme.entity";

export const create = async (memeCreateDto: MemeCreateDto): Promise<Meme> => {
    return MemeModal.create(memeCreateDto);
};

export const updateById = async (id: string, memePatchDTO: MemePatchDto): Promise<Meme> => {
    const match = {
        _id: id
    };
    const update = {
        $set: memePatchDTO
    };
    const config = {
        //this return the new object after update, otherwise will return the old without the changes
        new: true,
    };
    return MemeModal
        .findOneAndUpdate(match, update, config)
        .lean(); //lean is for not create a mongoose object unnecessary. boost 3~~5x more speed.
};

export const deleteById = async (id: string) => {
    const match = {
        _id: id,
    };
    return MemeModal.deleteOne(match);
};

export const find = async (): Promise<Meme[]> => {
    return MemeModal.find().lean();
};

export const findById = async (id: string): Promise<Meme> => {
    return MemeModal.findById(id).lean();
};
