module.exports = {
    client: "pg",
    connection: {
        host: "db",
        user: "volnei",
        password: "12345",
        database: "db_user",
    },
    pool: {
        min: 2,
        max: 10,
    },
    migrations: {
        tableName: "knex_migrations",
        directory: __dirname + "/src/data/migrations",
    },
};
