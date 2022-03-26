const { Router } = require("express");

const GetAllUserController = require("../controller/user/getAllUserController");
const AddUserController = require("../controller/user/addUserController");
const GetUserController = require("../controller/user/getUserController");
const UpdateUserController = require("../controller/user/updateUserController");
const DeleteUserController = require("../controller/user/deleteUserController");
const DeleteAllController = require("../controller/user/deleteAllController");

const router = Router();

router.get("/", new GetAllUserController().route);
router.get("/:id", new GetUserController().route);

router.post("/", new AddUserController().route);

router.put("/:id", new UpdateUserController().route);

router.delete("/", new DeleteAllController().route);
router.delete("/:id", new DeleteUserController().route);

module.exports = router;
