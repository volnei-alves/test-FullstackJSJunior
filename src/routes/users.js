const { Router } = require("express");
const db = require("../data");

const GetAllUserController = require("../controller/getAllUserController");
const AddUserController = require("../controller/addUserController");
const router = Router();

router.get("/", new GetAllUserController().route);
router.post("/", new AddUserController().route);
router.get("/:id", function (req, res) {
    res.json({ nome: "volnei", email: "volnei" });
});
router.put("/:id", function (req, res) {
    res.json({ nome: "volnei", email: "volnei" });
});
router.delete("/", function (req, res) {
    res.json({ nome: "volnei", email: "volnei" });
});
router.delete("/:id", function (req, res) {
    res.json({ nome: "volnei", email: "volnei" });
});

module.exports = router;
