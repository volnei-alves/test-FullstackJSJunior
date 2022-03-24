const getRepositoryAllUser = require("../../repository/user/getRepositoryAllUsers");

module.exports = class GetAllUsers {
    async getAll() {
        return await new getRepositoryAllUser().getAll();
    }
};
