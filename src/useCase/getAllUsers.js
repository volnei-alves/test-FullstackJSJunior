const getRepositoryAllUser = require("../repository/getRepositoryAllUsers");

module.exports = class GetAllUsers {
    async getAll() {
        return await new getRepositoryAllUser().getAll();
    }
};
