import express, { Application } from "express"
import "dotenv/config"
import {
  createRole,
  deleteRole,
  getRoles,
  updateRole
} from "./controllers/roleController"
import {
  deleteUserById,
  getProfile,
  getUserById,
  getUsers,
  updateProfile,
  updateUserById
} from "./controllers/userController"
import { login, register } from "./controllers/authController"
import { auth } from "./middlewares/auth"
import { isSuperAdmin } from "./middlewares/isSuperAdmin"
import { createAuthor } from "./controllers/authorController"

export const app: Application = express()

//parsea el texto plano recibido a JSON
app.use(express.json())

app.get("/healthy", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is healthy"
  })
})

//authentication routes
app.post("/api/register", register)
app.post("/api/login", login)

//roles routes
app.get("/api/roles", getRoles)
app.post("/api/roles", createRole)
app.put("/api/roles/:id", updateRole)
app.delete("/api/roles/:id", deleteRole)

//users routes
app.get("/api/users", getUsers)
app.get("/api/users/profile", getProfile)
app.put("api/users/profile", auth, updateProfile)
app.get("/api/users/:id", getUserById)
app.put("/api/users/:id", updateUserById)
app.delete("/api/users/:id", deleteUserById)

//author routes
app.get("/api/authors", auth, isSuperAdmin)
app.post("/api/authors", createAuthor)
app.put("/api/authors", auth, isSuperAdmin)
app.delete("/api/authors", auth, isSuperAdmin)

//get y delete no suelen pasar datos por body, por parámetros de ruta
//put lleva el id en la ruta, datos en el body

/* 1 Diseño base datos
2 Crear servidor (se prueba alguna ruta para comprobar que el server está activo y responde)
3 Conectar BD
4 Migraciones
5 Modelos
6 CRUD (Rutas, controles, middleware...)*/

/* Crear en BD
mail: admin@admin.com
pass: admin

mail: superadmin@superadmin.com
pass: superadmin

mail: user@user.com
pass: user
*/