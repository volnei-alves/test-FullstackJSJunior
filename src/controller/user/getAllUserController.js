const GetAllUsers = require("../../useCase/user/getAllUsers");

module.exports = class GetAllUserController {
    async route(req, res) {
        const data = await new GetAllUsers().getAll();
        res.json(data);
    }
};
