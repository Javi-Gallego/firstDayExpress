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
app.get("/roles", getRoles);
app.post("/roles", createRole);
app.put("/roles/:id", updateRole);
app.delete("/roles/:id", deleteRole);

//users routes
app.get("/users", getUsers);
app.post("/users", createUser);
app.put("/users/:id", updateUser);
app.delete("/users/:id", deleteUser);
