const bcrypt = require("bcrypt");
const addRepositoryUser = require("../../repository/user/AddRepositoryUser");
const schema = require("../../validation/addUserValidate");
const HttpResponse = require("../../util/HttpResponse");

const saltRounds = 10;

module.exports = class AddUser {
    async addUser(email, password) {
        const { error } = schema.validate({ email: email, password: password });

        if (error) return HttpResponde.BadRequest(error.message);

        const passwordCripto = await bcrypt.hash(password, saltRounds);

        const response = await new addRepositoryUser(email, passwordCripto).addUser();

        if (!response.constraint && response.rowCount === 1) {
            return HttpResponse.Ok("Users successfuly created");
        }

        return response;
    }
};
