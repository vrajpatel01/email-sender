const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'member'],
        required: true
    },
    password: {
        type: String,
        required: true
    },
}, { timestamp: true });

module.exports = mongoose.model('user', userSchema);