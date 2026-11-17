const express = require("express");
const db = require("../db");
const requireAuth = require("../middleware/auth");
const { publicTodo } = require("../utils/http");

const router = express.Router();
router.use(requireAuth);

const selectTodos = db.prepare(
  "SELECT * FROM todos WHERE user_id = ? ORDER BY created_at DESC, id DESC"
);
const selectTodo = db.prepare(
  "SELECT * FROM todos WHERE id = ? AND user_id = ?"
);

router.get("/", (req, res) => {
  const todos = selectTodos.all(req.user.id).map(publicTodo);
  res.json({ todos, count: todos.length });
});

router.post("/", (req, res) => {
  const title = typeof req.body.title === "string" ? req.body.title.trim() : "";
  const description = typeof req.body.description === "string" ? req.body.description.trim() : "";

  if (!title || title.length > 160) {
    return res.status(400).json({ message: "Title is required (maximum 160 characters)." });
  }
  if (description.length > 5000) {
    return res.status(400).json({ message: "Description cannot exceed 5000 characters." });
  }

  const result = db.prepare(`
    INSERT INTO todos (user_id, title, description)
    VALUES (?, ?, ?)
  `).run(req.user.id, title, description);

  const todo = selectTodo.get(result.lastInsertRowid, req.user.id);
  res.status(201).json({ message: "Todo created.", todo: publicTodo(todo) });
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id < 1) {
    return res.status(400).json({ message: "Invalid todo ID." });
  }

  const todo = selectTodo.get(id, req.user.id);
  if (!todo) return res.status(404).json({ message: "Todo not found." });

  res.json({ todo: publicTodo(todo) });
});

router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id < 1) {
    return res.status(400).json({ message: "Invalid todo ID." });
  }

  const existing = selectTodo.get(id, req.user.id);
  if (!existing) return res.status(404).json({ message: "Todo not found." });

  const allowed = ["title", "description", "completed"];
  const keys = Object.keys(req.body || {});
  if (!keys.length || keys.some((key) => !allowed.includes(key))) {
    return res.status(400).json({ message: "Send one or more valid fields: title, description, completed." });
  }

  let title = existing.title;
  let description = existing.description;
  let completed = Boolean(existing.completed);

  if (Object.hasOwn(req.body, "title")) {
    if (typeof req.body.title !== "string" || !req.body.title.trim() || req.body.title.trim().length > 160) {
      return res.status(400).json({ message: "Title must be 1–160 characters." });
    }
    title = req.body.title.trim();
  }

  if (Object.hasOwn(req.body, "description")) {
    if (typeof req.body.description !== "string" || req.body.description.length > 5000) {
      return res.status(400).json({ message: "Description must be a string of at most 5000 characters." });
    }
    description = req.body.description.trim();
  }

  if (Object.hasOwn(req.body, "completed")) {
    if (typeof req.body.completed !== "boolean") {
      return res.status(400).json({ message: "Completed must be true or false." });
    }
    completed = req.body.completed;
  }

  db.prepare(`
    UPDATE todos
    SET title = ?, description = ?, completed = ?,
        updated_at = strftime('%Y-%m-%dT%H:%M:%fZ', 'now')
    WHERE id = ? AND user_id = ?
  `).run(title, description, completed ? 1 : 0, id, req.user.id);

  res.json({ message: "Todo updated.", todo: publicTodo(selectTodo.get(id, req.user.id)) });
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id < 1) {
    return res.status(400).json({ message: "Invalid todo ID." });
  }

  const result = db.prepare("DELETE FROM todos WHERE id = ? AND user_id = ?")
    .run(id, req.user.id);

  if (!result.changes) return res.status(404).json({ message: "Todo not found." });
  res.json({ message: "Todo deleted successfully." });
});

module.exports = router;
