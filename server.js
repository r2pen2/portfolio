const express = require('express');

// Init express application
const app = express();
// Start listening on defined port
app.listen(3002, () => {
    console.log('Now listening on port ' + 3002);
});

// Serve static files
app.use(express.static(__dirname + "/static/"));

app.get("*", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});