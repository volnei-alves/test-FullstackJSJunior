const express = require("express");

module.exports = class AddUserController {
    async route(req, res) {
        const createUser = await db("users").insert({
            id: uuidv4(),
            email: "coleni@gmail.com",
            senha: 123456,
        });
        res.json(createUser.rowCount);
    }
};
