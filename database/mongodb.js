(async () => {
    const mongoose = require('mongoose');
    const {DB_URL, DB_SETTINGS} = require('../config/mongodb');

    try {
        await mongoose.connect(DB_URL, DB_SETTINGS);
    } catch (e) {
        console.error(`Erro na conexao com mongodb:${DB_URL}`);
        console.error(e.message);
    }
})();
