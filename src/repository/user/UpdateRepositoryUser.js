const db = require("../../../data");
const UserEntity = require("../../entities/UserEntity");

module.exports = class UpdateRepositoryUser {
    async update(id, email, password) {
        const response = await db
            .update({
                email: email,
                password: password,
            })
            .from("users")
            .where("id", id);

        return response;
    }
};
