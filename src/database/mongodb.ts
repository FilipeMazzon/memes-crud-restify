import * as mongoose from 'mongoose';
import { DB_URL, DB_SETTINGS } from '../config/mongodb';

(async () => {
  try {
    await mongoose.connect(DB_URL, DB_SETTINGS);
    console.log(`connect with db: ${DB_URL}`);
  } catch (e) {
    console.error(`Erro na conexao com mongodb:${DB_URL}`);
    console.error(e.message);
  }
})();
