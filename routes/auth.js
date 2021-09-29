const { Router } = require("express");
const { newUser } = require("../controllers/auth");
const router = Router();

router.post("/new", newUser);

router.get("/", (req, res) => {
    res.json({
        ok: true,
        msg: "hola",
    });
});

router.get("/renew", (req, res) => {
    res.json({
        ok: true,
        msg: "renew",
    });
});

module.exports = router;
