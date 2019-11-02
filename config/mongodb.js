//const DB_URL = "mongodb+srv://filipe.mazzon:1177@cluster0-ven8.mongodb.net/ec021-av2-core?retryWrites=true&w=majority";
const DB_URL = "mongodb://localhost:27017";
const DB_SETTINGS = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
};

module.exports = {
    DB_URL,
    DB_SETTINGS
};
