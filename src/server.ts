
import express, { Application } from 'express'
import dotenv from 'dotenv'
import { createRole, deleteRole, getRoles, updateRole } from '../controllers/roleController'
import { createUser, deleteUser, getUsers, updateUser } from '../controllers/userController'

dotenv.config()

const app:Application = express()

app.use(express.json())

const PORT = process.env.PORT || 4001

app.get("/healthy", (req, res) => {
    res.status(200).json(
        {
            success: true,
            message: "Server is healthy"
        }
    );
})

//roles routes
app.get("/roles", getRoles)
app.post("/roles", createRole)
app.put("/roles/:id", updateRole)
app.delete("/roles/:id", deleteRole)

//users routes
app.get("/users", getUsers)
app.post("/users", createUser)
app.put("/users/:id", updateUser)
app.delete("/users/:id", deleteUser)

//Activa la app para que este en escucha en el puerto determinado
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})