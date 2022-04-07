exports.up = function (knex) {
    return knex.schema.createTable("users", function (table) {
        table.uuid("id").notNullable();
        table.string("email").unique().notNullable();
        table.string("password").notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("users");
};

//exports.config = { transaction: false };
