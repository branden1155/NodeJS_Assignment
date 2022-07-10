const express = require("express");
const boredRouter = require("../router/boredRouter")

//Getting LocalHost:3000
const app = express();
app.get("/", (req, res, next) => {
    res.status(200).json({message: `service is up!`})
});

//Middleware for ROUTERS
app.use("/activity", boredRouter);

//Middleware for Handling Errors and Bad URL Paths
app.use((req, res, next) => {
    const error = new Error("URL IS NOT FOUND!")
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) =>{
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status,
            method: req.method,
        }
    });
});

//Exporting Module
module.exports = app;