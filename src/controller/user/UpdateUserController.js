const updateUserId = require("../../useCase/user/UpdateUserId");

module.exports = class UpdateUserController {
    async route(req, res) {
        const response = await new updateUserId().updateUserId(req.params.id, req.body);
        res.json(response);
    }
};
