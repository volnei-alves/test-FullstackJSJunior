const express = require("express");
const AddUser = require("../../useCase/user/addUser");

module.exports = class AddUserController {
    async route(req, res) {
        const { email, password } = req.body;

        const createUser = await new AddUser().addUser(email, password);

        if (createUser.code === 403 || createUser.code === 400) {
            res.status(createUser.code).json(createUser);
        } else {
            res.status(createUser.code).json(createUser);
        }
    }
};
