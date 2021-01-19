const contactModel = require('../Models/contact');

async function getAllContacts() {
    try {
        return await contactModel.find({ isDeleted: true });
    } catch (error) {
        throw error
    }

}

async function getContact(Id) {
    try {
        return await contactModel.findById(Id);
    } catch (error) {
        throw error
    }
}

async function createContact(reqBody) {
    try {
        return await contactModel.create(reqBody)
    } catch (error) {
        throw error
    }
}

async function updateContact(reqBody) {
    try {
        return await contactModel.findOneAndUpdate({ id: contactId }, reqBody)
    } catch (error) {
        throw error
    }
}

async function deleteContact(contactId) {
    try {
        return await contactModel.findOneAndUpdate({ id: contactId }, { isDeleted: true })
    } catch (error) {
        throw error
    }
}

module.exports = {
    getAllContacts,
    getContact,
    createContact,
    deleteContact,
    updateContact
};