const db = require("../../data");
const { v4: uuidv4 } = require("uuid");

const UserEntity = require("../../entities/UserEntity");

module.exports = class addRepositoryUser {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    async addUser() {
        const userCreate = new UserEntity(uuidv4(), this.email, this.password).insertUser();
        try {
            const response = await db("users").insert({
                id: userCreate.id,
                email: userCreate.email,
                password: userCreate.password,
            });
            return response;
        } catch (error) {
            return error;
        }
    }
};
