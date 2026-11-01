import express from "express";
import cors from "cors";

import userRoutes from "./routes/users.js";
import productRoutes from "./routes/products.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Mock API is running 🚀",
    });
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`API running at http://localhost:${PORT}`);
});
