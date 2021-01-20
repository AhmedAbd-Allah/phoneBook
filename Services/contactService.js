const contactModel = require('../Models/contact');

async function getAllContacts() {
    try {
        return await contactModel.find({ isDeleted: false });
    } catch (error) {
        throw error
    }

}

async function getContact(Id) {
    try {
        return await contactModel.find({ _id: Id, isDeleted: false });
    } catch (error) {
        throw error
    }
}

async function createContact(reqBody) {
    try {
        return await contactModel.create(reqBody)
    } catch (error) {
        console.log("error", error);
        throw error
    }
}

async function updateContact(contactId, reqBody) {
    try {
        let update = {};
        reqBody.name ? update.name = reqBody.name : '';
        reqBody.emailAddress ? update.emailAddress = reqBody.emailAddress : '';
        reqBody.mailingAddress ? update.mailingAddress = reqBody.mailingAddress : '';
        if (reqBody.phoneNumber.work || reqBody.phoneNumber.home || reqBody.phoneNumber.mobile || reqBody.phoneNumber.other) {
            update['$set'] = {}
            reqBody.phoneNumber.work ? update['$set']['phoneNumber.work'] = reqBody.phoneNumber.work : '';
            reqBody.phoneNumber.home ? update['$set']['phoneNumber.home'] = reqBody.phoneNumber.home : '';
            reqBody.phoneNumber.mobile ? update['$set']['phoneNumber.mobile'] = reqBody.phoneNumber.mobile : '';
            reqBody.phoneNumber.other ? update['$set']['phoneNumber.other'] = reqBody.phoneNumber.other : '';
        }

        if (Object.keys(update).length != 0) {
            let result = await contactModel.findByIdAndUpdate({ _id: contactId, isDeleted: false }, update, { useFindAndModify: false, new: true })
            return result;
        }
        return update
    } catch (error) {
        console.log(error);
        throw error
    }
}

async function deleteContact(contactId) {
    try {
        let result = await contactModel.findOneAndUpdate({ _id: contactId, isDeleted: false }, { isDeleted: true }, { useFindAndModify: false, new: true })
        return result
    } catch (error) {
        console.log(error);
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