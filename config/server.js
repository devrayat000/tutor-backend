module.exports = ({ env }) => ({
  host: env("HOST", "127.0.0.1"),
  port: env.int("PORT", 1337),
  url: `https://${env("RAILWAY_STATIC_URL", "mydomain.wtf")}`,
  app: {
    keys: env.array("APP_KEYS"),
  },
});
