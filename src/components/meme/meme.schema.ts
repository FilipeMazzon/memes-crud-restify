import { Document, Model, model, Schema } from 'mongoose';

import { IMeme } from './meme.interface';

export interface IMemeModel extends IMeme, Document {
}

export const MemeSchema = new Schema({
  titulo: { type: String, required: true },
  descricao: { type: String, required: true },
  ano: { type: Number, required: true, index: true },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now(), index: true },
});

// this is a middleware will active before findOneAndUpdate completed
// this is a way to you never forget to update the field updateAt
MemeSchema.pre('findOneAndUpdate', function (next) {
  this._update.$set = {
    ...this._update.$set,
    updatedAt: Date.now(),
  };
  // need to have next otherwise will not continue the process of findOneAndUpdate
  next();
});

const collectionName = 'memes';

export const Meme: Model<IMemeModel> = model<IMemeModel>(collectionName, MemeSchema);
