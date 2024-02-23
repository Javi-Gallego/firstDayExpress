
import express, { Application } from 'express'
import dotenv from 'dotenv'
import { createRole, deleteRole, getRoles, updateRole } from '../controllers/roleController'
import { deleteUser, getUsers, postUser, updateUser } from '../controllers/userController'

dotenv.config()

const app:Application = express()

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
app.put("/roles", updateRole)
app.delete("/roles", deleteRole)

//users routes
app.get("/users", getUsers)
app.post("/users", postUser)
app.put("/users", updateUser)
app.delete("/users", deleteUser)

//Activa la app para que este en escucha en el puerto determinado
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})