const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://admin:admin@cluster0.9rt3s.mongodb.net/database?retryWrites=true&w=majority';

const openConnection = () => mongoose.connect(connectionString, { useNewUrlParser: true })

module.exports = {
    openConnection,
}