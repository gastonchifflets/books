const { Schema, model } = require("mongoose");

const UserSchema = Schema({
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
});

const User = model("User", UserSchema);

module.exports = User;
