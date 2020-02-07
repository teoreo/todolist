const config = require("./config/config");
const express = require("express");
const mongoose = require("mongoose");
const listRouter = require("./router/listRouter")
const path = require("path")
const app = express(); 

//middleware
app.use(express.urlencoded({extended:true})); // datan läses som post till databasen
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

//router
app.use(listRouter);
//port
const port = process.env.PORT || 8002;
const options = { useUnifiedTopology: true,
                useNewUrlParser: true
            }

mongoose.connect(config.databaseURL, options).then(() => {
    console.log("Connected to server")
    app.listen(port);
});