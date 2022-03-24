const db = require("../data");

module.exports = class getRepositoryAllUser {
    async getAll() {
        const data = await db.select().from("users");
        return data;
    }
};
