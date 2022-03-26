const { Router } = require("express");

const GetAllUserController = require("../controller/user/GetAllUserController");
const GetUserController = require("../controller/user/GetUserController");
const AddUserController = require("../controller/user/AddUserController");
const UpdateUserController = require("../controller/user/UpdateUserController");
const DeleteUserController = require("../controller/user/DeleteUserController");
const DeleteAllController = require("../controller/user/DeleteAllController");

const router = Router();

router.get("/", new GetAllUserController().route);
router.get("/:id", new GetUserController().route);

router.post("/", new AddUserController().route);

router.put("/:id", new UpdateUserController().route);

router.delete("/", new DeleteAllController().route);
router.delete("/:id", new DeleteUserController().route);

module.exports = router;
