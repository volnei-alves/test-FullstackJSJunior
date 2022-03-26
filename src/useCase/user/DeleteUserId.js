const DeleteRepositoryUser = require("../../repository/user/DeleteRepositoryUser");
const { validate } = require("uuid");
const HttpResponse = require("../../util/HttpResponse");

module.exports = class DeleteUserId {
    async delete(id) {
        if (validate(id) === true) {
            const response = await new DeleteRepositoryUser().delete(id);

            if (response > 0) {
                return HttpResponse.Ok("User deleted succefully");
            } else {
                return HttpResponse.NotModified("User not deleted, id and user non-existent");
            }
        }
        return HttpResponse.NotModified("User not deleted, id Invalid");
    }
};
