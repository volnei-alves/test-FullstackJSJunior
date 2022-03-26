const db = require("../../data");

module.exports = class DeleteRepositoryUser {
    async delete(id) {
        const response = await db.delete().from("users").where("id", id);
        return response;
    }
};
