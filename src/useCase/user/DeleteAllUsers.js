const DeleteRepositoryAllUsers = require("../../repository/user/DeleteRepositoryAllUsers");
const HttpResponse = require("../../util/HttpResponse");

module.exports = class DeleteAllUsers {
    async delete() {
        const response = await new DeleteRepositoryAllUsers().delete();

        if (response > 0) return HttpResponse.Ok("Users successfuly deleted");
        if (response === 0) {
            return HttpResponse.NotModified("Empty database no data has changed");
        }
    }
};
