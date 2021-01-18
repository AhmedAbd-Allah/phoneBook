const express = require('express');
const app = express();

// server up
app.listen(Config.serverPort, () => {
    console.log("Server is on and listening on port ", Config.serverPort);
});

module.exports = app
