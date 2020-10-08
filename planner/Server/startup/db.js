const mongoose = require('mongoose');
const config = require('config')
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

function connectDB() {
    mongoose.connect(config.get('mongoURI'), {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log('Connected to MongoDB...')).catch((err) => {
        console.log(`Could not connect to MongoDB. ERROR: ${err}`);
        process.exit(1);
    });
}
module.exports = connectDB;