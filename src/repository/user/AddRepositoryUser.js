const db = require("../../data");
const { v4: uuidv4 } = require("uuid");

const UserEntity = require("../../entities/userEntity");

module.exports = class addRepositoryUser {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    async addUser() {
        const userCreate = new UserEntity(this.email, this.password);
        try {
            const createUser = await db("users").insert({
                id: uuidv4(),
                email: userCreate.email,
                senha: userCreate.password,
            });
            return createUser;
        } catch (error) {
            return error;
        }
    }
};
