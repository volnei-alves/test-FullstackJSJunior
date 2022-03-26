const db = require("../../data");
const UserEntity = require("../../entities/UserEntity");

module.exports = class UpdateRepositoryUser {
    async update(id, data) {
        const response = await db
            .update({
                email: data,
            })
            .from("users")
            .where("id", id);

        return response;
    }
};
