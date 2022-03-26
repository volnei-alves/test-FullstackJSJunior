module.exports = class HttpResponde {
    static Ok(mensage) {
        return {
            statusCode: 200,
            mensage: mensage,
        };
    }

    static Created(mensage) {
        return {
            statusCode: 201,
            mensage: mensage,
        };
    }

    static NotModified(mensage) {
        return {
            statusCode: 304,
            mensage: mensage,
        };
    }

    static BadRequest(mensage) {
        return {
            statusCode: 400,
            mensage: mensage,
        };
    }

    static Unauthorized(mensage) {
        return {
            statusCode: 401,
            mensage: mensage,
        };
    }

    static Forbidden(mensage) {
        return {
            statusCode: 403,
            mensage: mensage,
        };
    }

    static NotFound(mensage) {
        return {
            statusCode: 404,
            mensage: mensage,
        };
    }

    static InternalServerError(mensage) {
        return {
            statusCode: 500,
            mensage: mensage,
        };
    }
};
