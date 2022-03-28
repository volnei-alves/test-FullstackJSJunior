/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function (knex) {
    knex.schema.createTable("users", function (table) {
        table.uuid("id").notNullable();
        table.string("email").unique().notNullable();
        table.string("password").notNullable;
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("users");
};
