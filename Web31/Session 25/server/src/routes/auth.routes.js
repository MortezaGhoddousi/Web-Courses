const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../db");
const config = require("../config");
const requireAuth = require("../middleware/auth");
const { asyncHandler, publicUser } = require("../utils/http");

const router = express.Router();
const findByEmail = db.prepare("SELECT * FROM users WHERE email = ?");
const insertUser = db.prepare(
  "INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)"
);

function issueToken(userId) {
  return jwt.sign({}, config.jwtSecret, {
    subject: String(userId),
    expiresIn: config.jwtExpiresIn
  });
}

function setAuthCookie(res, token) {
  res.cookie("access_token", token, {
    httpOnly: true,
    secure: config.nodeEnv === "production",
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
    path: "/"
  });
}

router.post("/signup", asyncHandler(async (req, res) => {
  const name = typeof req.body.name === "string" ? req.body.name.trim() : "";
  const email = typeof req.body.email === "string" ? req.body.email.trim().toLowerCase() : "";
  const password = typeof req.body.password === "string" ? req.body.password : "";

  if (!name || name.length > 80) {
    return res.status(400).json({ message: "Name is required (maximum 80 characters)." });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return res.status(400).json({ message: "Please provide a valid email address." });
  }
  if (password.length < 8 || password.length > 72) {
    return res.status(400).json({ message: "Password must be between 8 and 72 characters." });
  }
  if (findByEmail.get(email)) {
    return res.status(409).json({ message: "An account with this email already exists." });
  }

  const passwordHash = await bcrypt.hash(password, 12);
  const result = insertUser.run(name, email, passwordHash);
  const user = db.prepare("SELECT id, name, email, created_at FROM users WHERE id = ?")
    .get(result.lastInsertRowid);

  setAuthCookie(res, issueToken(user.id));
  res.status(201).json({ message: "Account created successfully.", user: publicUser(user) });
}));

router.post("/login", asyncHandler(async (req, res) => {
  const email = typeof req.body.email === "string" ? req.body.email.trim().toLowerCase() : "";
  const password = typeof req.body.password === "string" ? req.body.password : "";

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  const user = findByEmail.get(email);
  const validPassword = user && await bcrypt.compare(password, user.password_hash);

  if (!validPassword) {
    return res.status(401).json({ message: "Incorrect email or password." });
  }

  setAuthCookie(res, issueToken(user.id));
  res.json({ message: "Logged in successfully.", user: publicUser(user) });
}));

router.post("/logout", (req, res) => {
  res.clearCookie("access_token", {
    httpOnly: true,
    secure: config.nodeEnv === "production",
    sameSite: "lax",
    path: "/"
  });
  res.json({ message: "Logged out successfully." });
});

router.get("/me", requireAuth, (req, res) => {
  res.json({ user: publicUser(req.user) });
});

module.exports = router;
