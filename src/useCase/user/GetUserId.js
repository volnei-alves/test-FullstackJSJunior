const GetRepositoryUser = require("../../repository/user/GetRepositoryUser");
const { validate } = require("uuid");
const HttpResponse = require("../../util/HttpResponse");

module.exports = class GetUserId {
    async getUser(id) {
        if (validate(id) === true) {
            return await new GetRepositoryUser().getUser(id);
        }
        return HttpResponse.NotModified("User not deleted, id Invalid");
    }
};
