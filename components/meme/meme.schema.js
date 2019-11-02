const mongoose = require('mongoose');
const {Schema} = mongoose;
const MemeSchema = new Schema({
    titulo: {type: String, required: true},
    descricao: {type: String, required: true},
    ano: {type: Number, required: true},
    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date, default: Date.now()},
});

MemeSchema.pre("findOneAndUpdate", function (next) {
    this._update.$set = {
        ...this._update.$set,
        updatedAt: Date.now()
    };
    next();
});

module.exports = mongoose.model('Memes', MemeSchema);
