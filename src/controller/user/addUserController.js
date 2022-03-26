const express = require("express");
const newUser = require("../../useCase/user/addUser");

module.exports = class AddUserController {
    async route(req, res) {
        const { email, password } = req.body;

        const createUser = await new newUser().addUser(email, password);

        if (createUser.statusCode === 403 || createUser.statusCode === 400) {
            res.status(createUser.statusCode).json(createUser);
        } else {
            res.status(createUser.statusCode).json(createUser);
        }
    }
};
