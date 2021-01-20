const contactService = require('../Services/contactService')


async function getAllContacts(req, res) {
    try {
        let contacts = await contactService.getAllContacts(req.query);
        res.status(200).send(contacts)
    } catch (error) {
        res.send(error)
    }
}

async function getContact(req, res) {
    try {
        let contact = await contactService.getContact(req.params.contactId);
        res.status(200).send(contact)
    } catch (error) {
        res.send(error)
    }
}

async function createContact(req, res) {
    try {
        let contact = await contactService.createContact(req.body);
        res.status(200).send(contact)
    } catch (error) {
        res.send(error)
    }
}

async function deleteContact(req, res) {
    try {
        let deletedContact = await contactService.deleteContact(req.params.contactId);
        res.status(200).send('Contact ' + deletedContact.name + ' Deleted')
    } catch (error) {
        res.send(error)
    }
}

async function updateContact(req, res) {
    try {
        let contact = await contactService.updateContact(req.params.contactId, req.body);
        res.status(200).send(contact)
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    getAllContacts,
    deleteContact,
    getContact,
    updateContact,
    createContact
}


