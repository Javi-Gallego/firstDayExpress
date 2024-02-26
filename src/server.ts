
import 'dotenv/config'
import { app } from './app'

//variable que se pone usando dontenv y el archivo .env, si no encuentra el valor le pone por defecto 4001
const PORT = process.env.PORT || 4001

const startServer = () => {
    //Activa la app para que este en escucha en el puerto determinado
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    })
}

startServer()
