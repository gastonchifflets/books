const User = require("../models/User");

const newUser = async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();

        res.status(201).json({
            ok: true,
            msg: "Usuario agregado",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Contacte con el administrador.",
        });
    }
};

module.exports = {
    newUser,
};
