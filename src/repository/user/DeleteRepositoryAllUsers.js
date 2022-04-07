const db = require("../../../data");

module.exports = class DeleteRepositoryAllUsers {
    async delete() {
        const response = await db.delete().from("users");
        return response;
    }
};
