const UpdateUser = require("../../repository/user/UpdateRepositoryUser");
const HttpResponse = require("../../util/HttpResponse");
const { validate } = require("uuid");
const schema = require("../../validation/addUserValidate");
const bcrypt = require("bcrypt");

module.exports = class UpdateUserId {
    async updateUserId(id, data) {
        console.log(data);
        if (validate(id) === true) {
            const { error } = schema.validate({ email: data.email, password: data.password });

            if (error) return HttpResponse.BadRequest(error.message);

            const passwordCripto = await bcrypt.hash(data.password, 10);

            const response = await new UpdateUser().update(id, data.email, passwordCripto);

            if (response > 0) return HttpResponse.Created("User data edited succefully");
            if (response === 0) {
                return HttpResponse.NotModified("User not edited, id and user non-existent");
            }
        } else {
            return HttpResponse.NotModified("User not edited, id Invalid");
        }
    }
};
