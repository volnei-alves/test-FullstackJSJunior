const db = require("../../../data");
const UserEntity = require("../../entities/UserEntity");

module.exports = class getRepositoryAllUser {
    async getAll() {
        const data = await db.select().from("users");
        let response = [];
        data.map((obj) => {
            const user = new UserEntity(obj.id, obj.email, obj.password).getUser();
            response.push(user);
        });
        return response;
    }
};
