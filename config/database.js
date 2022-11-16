module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("PGHOST", "127.0.0.1"),
      port: env.int("PGPORT", 5432),
      database: env("PGDATABASE", "tutorbd"),
      user: env("PGUSER", "postgres"),
      password: env("PGPASSWORD", "ppooii12"),
      ssl: env.bool(true),
    },
  },
});
