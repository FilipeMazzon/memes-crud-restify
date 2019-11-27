import * as mongoose from 'mongoose';

import { DB_SETTINGS, DB_URL } from '../config/mongodb';

(async () => {
  await mongoose.connect(DB_URL, DB_SETTINGS);
})();
