const MemeModule = require('./meme.module');

const createMeme = async (req, res) => {
    const {titulo, descricao, ano} = req.body;
    if (!titulo || !descricao || !ano)
        return res.json({error: "parametros faltando titulo ou descricao ou ano"});
    const meme = await MemeModule.create({titulo, descricao, ano});
    return res.send(201, meme);
};

const updateMeme = async (req, res) => {
    const {id} = req.params;
    const {titulo, descricao, ano} = req.body;
    if (!titulo && !descricao && !ano)
        return res.send(400, 'necessita alterar alguma coisa!');
    const meme = await MemeModule.updateById(id, {titulo, descricao, ano});
    return res.send(meme);
};

const getMemeById = async (req, res) => {
    const {id} = req.params;
    const meme = await MemeModule.findById(id);
    return res.send(meme);
};

const getMemes = async (req, res) => {
    const memes = await MemeModule.find();
    return res.send(memes);
};

const deleteMeme = async (req, res) => {
    const {id} = req.body;
    await MemeModule.deleteById(id);
    return res.send("");
};

module.exports = {
    createMeme,
    updateMeme,
    getMemeById,
    getMemes,
    deleteMeme
};


