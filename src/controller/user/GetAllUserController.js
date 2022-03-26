const GetAllUsers = require("../../useCase/user/GetAllUsers");

module.exports = class GetAllUserController {
    async route(req, res) {
        const response = await new GetAllUsers().getAll();
        res.json(response);
    }
};
