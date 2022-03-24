module.exports = {
    client: "postgresql",
    connection: {
        database: "db_user",
        user: "volnei",
        password: "12345",
    },
    pool: {
        min: 2,
        max: 10,
    },
    migrations: {
        tableName: "knex_migrations",
    },
};
