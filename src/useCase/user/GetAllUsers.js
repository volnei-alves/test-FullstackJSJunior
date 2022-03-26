const getRepositoryAllUser = require("../../repository/user/GetRepositoryAllUsers");

module.exports = class GetAllUsers {
    async getAll() {
        return await new getRepositoryAllUser().getAll();
    }
};
