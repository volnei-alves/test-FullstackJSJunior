const db = require("../../data");
const UserEntity = require("../../entities/UserEntity");
const { v4: uuidv4, validate } = require("uuid");

module.exports = class getRepositoryUser {
    async getUser(id) {
        const data = await db.select().from("users").where("id", id);

        if (data[0]) {
            const response = new UserEntity(data[0].id, data[0].email).getUser();
            return response;
        } else {
            return data;
        }
    }
};
