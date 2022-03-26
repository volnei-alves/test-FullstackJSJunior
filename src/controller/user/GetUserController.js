const GetUserId = require("../../useCase/user/GetUserId");

module.exports = class UpdateUserController {
    async route(req, res) {
        const response = await new GetUserId().getUser(req.params.id);
        res.json(response);
    }
};
