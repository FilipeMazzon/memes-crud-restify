const MemeModal = require('./meme.schema');

const create = async ({titulo, descricao, ano}) => {
    return MemeModal.create({titulo, descricao, ano});
};

const updateById = async (id, {titulo, descricao, ano}) => {
    const toSet = {};
    if (titulo) toSet.titulo = titulo;
    if (descricao) toSet.descricao = descricao;
    if (ano) toSet.ano = ano;
    return MemeModal.findOneAndUpdate({
            _id: id
        }, {
            $set: toSet
        }, {
            new: true,
        }
    ).lean();
};

const deleteById = async (id) => {
    await MemeModal.deleteOne({
        _id: id,
    });
};

const find = async () => {
    return MemeModal.find().lean();
};

const findById = async (id) => {
    return MemeModal.findById(id).lean();
};

module.exports = { //Export to use this functions in main
    create,
    updateById,
    deleteById,
    find,
    findById,
};
