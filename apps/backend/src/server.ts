// src/server.ts
import express from "express";
import employeeRoutes from "./api/v1/routes/employeeRoutes";

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Mount routes
app.use("/api/v1/employees", employeeRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));