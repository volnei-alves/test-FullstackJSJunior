module.exports = class UpdateUserController {
    async route(req, res) {
        const data = await new GetAllUsers().getAll();
        res.json(data);
    }
};
