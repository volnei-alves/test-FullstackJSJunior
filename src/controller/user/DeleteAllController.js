const DeleteAllUsers = require("../../useCase/user/DeleteAllUsers");

module.exports = class DeleteAllController {
    async route(req, res) {
        const response = await new DeleteAllUsers().delete();
        res.json(response);
    }
};
