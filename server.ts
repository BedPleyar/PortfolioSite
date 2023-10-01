import { error } from "console";

console.log("Hello");

const PORT = 3000;
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// routes
app.get('/', (req: any, res: any) => {
    res.send("Hello Node API");
});

app.listen(PORT, () => {
    console.log(`Node API app is running on ${PORT}`);

});

mongoose.connect('mongodb+srv://admin:Supergreatpassword1%21@pdrahelper.joeldgn.mongodb.net/Portfolio?retryWrites=true&w=majority',)
.then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`Node API app is running on ${PORT}`);
    
    });
}).catch((error: any) =>
    console.log(error)
);