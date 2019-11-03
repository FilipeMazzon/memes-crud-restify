import * as  mongoose from 'mongoose';

const {Schema} = mongoose;

const MemeSchema = new Schema({
    titulo: {type: String, required: true},
    descricao: {type: String, required: true},
    ano: {type: Number, required: true},
    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date, default: Date.now()},
});

//this is a middleware will active before findOneAndUpdate completed
//this is a way to you never forget to update the field updateAt
MemeSchema.pre("findOneAndUpdate", function (next) {
    this._update.$set = {
        ...this._update.$set,
        updatedAt: Date.now()
    };
    //need to have next otherwise will not continue the process of findOneAndUpdate
    next();
});

export default mongoose.model('Memes', MemeSchema);
