
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Firstname: {
        type: String,
        required: true
    },
    Lastname: {
        type: String,
        required: true
    }
    
})
module.exports = mongoose.model('Database', UserSchema);