const express = require("express");
const boredRouter = express.Router();
const {boredService, boredServiceByType} = require("../services/boredServices")
// Route for GET without an ID
boredRouter.get("/", (req, res, next) => {
    boredService().then((result) => {
        res.status(200).json(result.data);
    })
    .catch((err) => {
        res.status(500).json({
            error: {
                message: error.message,
            },
        });
    });
});
//Route for GET with an ID
boredRouter.get('/:id', (req, res) => {
    boredServiceByType(req.params.id)
    .then((result) => {
        res.status(200).json(result.data)
    })
    .catch(err => {
        res.status(500).json({
            error: {
                message: error.message,
            },
        });
    });
});

//Exporting Module
module.exports = boredRouter;