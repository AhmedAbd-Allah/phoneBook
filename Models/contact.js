const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { uuid } = require('uuidv4');

const contactSchema = new Schema({
    id: {
        type: String,
        unique: true,
        default: uuid()
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