console.log("Hello");

const PORT = 3000;
const express = require("express");
const app = express();

// routes
app.get('/', (req, res) => {
    res.send("Hello Node API");
});

app.listen(PORT, () => {
    console.log(`Node API app is running on ${PORT}`);

});