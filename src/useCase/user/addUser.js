const bcrypt = require("bcrypt");
const saltRounds = 10;
const addRepositoryUser = require("../../repository/user/AddRepositoryUser");
const schema = require("../../validate/addUserValidate");

module.exports = class AddUser {
    async addUser(email, password) {
        const { error } = schema.validate({ email: email, password: password });

        if (error) return { code: 400, mensage: error.message };

        const passwordCripto = await bcrypt.hash(password, saltRounds);

        const response = await new addRepositoryUser(email, passwordCripto).addUser();

        if (!response.constraint && response.rowCount === 1) {
            return { code: 201, mensage: "User created successfully" };
        }

        return { code: 403, mensage: response.constraint };
    }
};
