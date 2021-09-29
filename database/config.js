const mongoose = require("mongoose");

const database = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/test");
        console.log("DB montada");
    } catch (error) {
        console.log(error);
    }
};

module.exports = database;
