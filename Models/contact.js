const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require('uuid');

const contactSchema = new Schema({
    _id: {
        type: String,
        unique: true,
        default: uuidv4()
    },
    name: {
        type: String,
    },
    phoneNumber: {
        work: {
            type: String,
        },
        home: {
            type: String,
        },
        mobile: {
            type: String,
        },
        other: {
            type: String,
        },
    },
    emailAddress: {
        type: String,
    },
    mailingAddress: {
        type: String,
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});


mongoose.model('Contacts', contactSchema);
module.exports = mongoose.model('Contacts');