const express = require('express');
const app = express();
const Config = require('./config')
const mongoose = require('mongoose')
const contactController = require('./Controllers/contactController')
const dbURI = Config.mongoURI;

// Start database connection
mongoose.connect(dbURI,
    { useNewUrlParser: true, useUnifiedTopology: true, 'useCreateIndex': true }
    , function (err, data) {
        if (err)
            console.log(err)
    });

// allow cross origin
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.get('/contacts', contactController.getAllContacts)
app.get('/contact/:contactId', contactController.getContact)
app.post('/contact', contactController.createContact)
app.delete('/contact/:contactId', contactController.deleteContact)
app.patch('/contact/:contactId', contactController.updateContact)


// server up
app.listen(Config.serverPort, () => {
    console.log("Server is on and listening on port ", Config.serverPort);
});

module.exports = app
