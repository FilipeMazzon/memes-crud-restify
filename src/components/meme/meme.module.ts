import MemeModal from './meme.schema';
import {MemePatchDTO} from './interfaces';

export const create = async ({titulo, descricao, ano}) => {
    return MemeModal.create({titulo, descricao, ano});
};

export const updateById = async (id, {titulo, descricao, ano}) => {
    const toSet: MemePatchDTO = {};
    //this is because is a patch method, you can edit only one field or others.
    if (titulo) toSet.titulo = titulo;
    if (descricao) toSet.descricao = descricao;
    if (ano) toSet.ano = ano;
    return MemeModal.findOneAndUpdate({
            _id: id
        }, {
            $set: toSet
        }, {
        //this return the new object after update, otherwise will return the old without the changes
            new: true,
        }
    ).lean();
};

export const deleteById = async (id) => {
    await MemeModal.deleteOne({
        _id: id,
    });
};

export const find = async () => {
    return MemeModal.find().lean();
};

export const findById = async (id) => {
    return MemeModal.findById(id).lean();
};
