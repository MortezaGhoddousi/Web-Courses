import express from "express";
import { users } from "../data/db.js";

const router = express.Router();

// Get all users
router.get("/", (req, res) => {
    res.json(users);
});

// Get user by ID
router.get("/:id", (req, res) => {
    const user = users.find((u) => u.id === Number(req.params.id));

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
});

// Create user
router.post("/", (req, res) => {
    const newUser = {
        id: Math.max(0, ...users.map((u) => u.id)) + 1,
        ...req.body,
    };

    users.push(newUser);

    res.status(201).json(newUser);
});

// Update user
router.put("/:id", (req, res) => {
    const index = users.findIndex((u) => u.id === Number(req.params.id));

    if (index === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    users[index] = { ...users[index], ...req.body };

    res.json(users[index]);
});

// Delete user
router.delete("/:id", (req, res) => {
    const index = users.findIndex((u) => u.id === Number(req.params.id));

    if (index === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    const deletedUser = users.splice(index, 1);

    res.json(deletedUser[0]);
});

export default router;
