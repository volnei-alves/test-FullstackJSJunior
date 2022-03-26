const NewUser = require("../../useCase/user/AddUser");

module.exports = class AddUserController {
    async route(req, res) {
        const { email, password } = req.body;

        const response = await new NewUser().addUser(email, password);
        res.json(response);
    }
};
