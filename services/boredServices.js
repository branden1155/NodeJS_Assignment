const axios = require("axios");
require("dotenv").config();

//setting service without type of activity
const boredService = async () => {
    console.log("Activitys");
    return await axios.get(`${process.env.boredURL}`);
};
//setting service for type of activity
const boredServiceByType = async (key) => {
    console.log("Activitys with Types");
    return await axios.get(`${process.env.boredURL}?key=${key}`);
};

//exporting modules
module.exports = {boredService, boredServiceByType};