const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Regd: {
        No: String,
    },
        password: String
});

module.exports = mongoose.model('users', userSchema);