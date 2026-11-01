import express from "express";
import { products } from "../data/db.js";

const router = express.Router();

// Get all products
router.get("/", (req, res) => {
    res.json(products);
});

// Get product by ID
router.get("/:id", (req, res) => {
    const product = products.find((p) => p.id === Number(req.params.id));

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
});

// Create product
router.post("/", (req, res) => {
    const newProduct = {
        id: Math.max(0, ...products.map((p) => p.id)) + 1,
        ...req.body,
    };

    products.push(newProduct);

    res.status(201).json(newProduct);
});

// Update product
router.put("/:id", (req, res) => {
    const index = products.findIndex((p) => p.id === Number(req.params.id));

    if (index === -1) {
        return res.status(404).json({ message: "Product not found" });
    }

    products[index] = { ...products[index], ...req.body };

    res.json(products[index]);
});

// Delete product
router.delete("/:id", (req, res) => {
    const index = products.findIndex((p) => p.id === Number(req.params.id));

    if (index === -1) {
        return res.status(404).json({ message: "Product not found" });
    }

    const deletedProduct = products.splice(index, 1);

    res.json(deletedProduct[0]);
});

export default router;
