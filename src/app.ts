import express, { Application } from "express";
import "dotenv/config";
import {
  createRole,
  deleteRole,
  getRoles,
  updateRole,
} from "./controllers/roleController";
import {
  deleteUserById,
  getUserById,
  getUsers,
  updateUserById,
} from "./controllers/userController";
import { login, register } from "./controllers/authController";
import { auth } from "./middlewares/auth";

export const app: Application = express();

//parsea el texto plano recibido a JSON
app.use(express.json());

app.get("/healthy", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is healthy",
  });
});

//authentication routes
app.post("/api/register", register);
app.post("/api/login", login);

//roles routes
app.get("/api/roles", getRoles);
app.post("/api/roles", createRole);
app.put("/api/roles/:id", updateRole);
app.delete("/api/roles/:id", deleteRole);

//users routes
app.get("/api/users", auth, getUsers);
app.get("/api/users/:id", getUserById);
app.put("/api/users/:id", updateUserById);
app.delete("/api/users/:id", deleteUserById);
