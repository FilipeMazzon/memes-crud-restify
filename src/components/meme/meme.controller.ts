import * as  MemeModule from './meme.module';

export const createMeme = async (req, res) => {
    const {titulo, descricao, ano} = req.body;
    if (!titulo || !descricao || !ano)
        return res.send(400, 'necessita ter todos os campos: titutlo, descricao e ano');
    const meme = await MemeModule.create({titulo, descricao, ano});
    return res.send(201, meme);
};

export const updateMeme = async (req, res) => {
    const {id} = req.params;
    const {titulo, descricao, ano} = req.body;
    if (!titulo && !descricao && !ano)
        return res.send(400, 'necessita alterar algum campo: titulo, descricao ou ano');
    const meme = await MemeModule.updateById(id, {titulo, descricao, ano});
    return res.send(meme);
};

export const getMemeById = async (req, res) => {
    const {id} = req.params;
    const meme = await MemeModule.findById(id);
    return res.send(meme);
};

export const getMemes = async (req, res) => {
    const memes = await MemeModule.find();
    return res.send(memes);
};

export const deleteMeme = async (req, res) => {
    const {id} = req.body;
    await MemeModule.deleteById(id);
    return res.send("");
};

