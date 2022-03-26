const DeleteUserId = require("../../useCase/user/DeleteUserId");

module.exports = class DeleteUserController {
    async route(req, res) {
        const response = await new DeleteUserId().delete(req.params.id);
        res.json(response);
    }
};
