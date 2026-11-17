require("dotenv").config();

const config = {
  port: Number(process.env.PORT) || 4000,
  nodeEnv: process.env.NODE_ENV || "development",
  clientOrigin: process.env.CLIENT_ORIGIN || "http://localhost:3000",
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "7d",
  databaseFile: process.env.DATABASE_FILE || "./data/todos.sqlite"
};

if (!config.jwtSecret || config.jwtSecret.length < 32) {
  throw new Error("JWT_SECRET must be set and contain at least 32 characters.");
}

module.exports = config;
