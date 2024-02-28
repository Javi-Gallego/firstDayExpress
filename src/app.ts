import express, { Application } from "express";
import "dotenv/config";
import {
  createRole,
  deleteRole,
  getRoles,
  updateRole,
} from "./controllers/roleController";
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from "./controllers/userController";
import { register } from "./controllers/authController";

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

//roles routes
app.get("/api/roles", getRoles);
app.post("/api/roles", createRole);
app.put("/api/roles/:id", updateRole);
app.delete("/api/roles/:id", deleteRole);

//users routes
app.get("/api/users", getUsers);
app.post("/api/users", createUser);
app.put("/api/users/:id", updateUser);
app.delete("/api/users/:id", deleteUser);
