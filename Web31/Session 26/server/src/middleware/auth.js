const jwt = require("jsonwebtoken");
const config = require("../config");
const db = require("../db");

function requireAuth(req, res, next) {
  const bearer = req.headers.authorization?.startsWith("Bearer ")
    ? req.headers.authorization.slice(7)
    : null;
  const token = req.cookies?.access_token || bearer;

  if (!token) {
    return res.status(401).json({ message: "Please log in to continue." });
  }

  try {
    const payload = jwt.verify(token, config.jwtSecret);
    const user = db.prepare(
      "SELECT id, name, email, created_at FROM users WHERE id = ?"
    ).get(payload.sub);

    if (!user) {
      return res.status(401).json({ message: "Your session is no longer valid." });
    }

    req.user = user;
    next();
  } catch {
    return res.status(401).json({ message: "Invalid or expired session." });
  }
}

module.exports = requireAuth;
