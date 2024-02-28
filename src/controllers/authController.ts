import { Request, Response } from "express"
import bcrypt from "bcrypt"
import { User } from "../models/User"


export const register = async (req: Request, res: Response) => {
    try {
        console.log(req.body)

        const { name, email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please provide an email and a password"
            })
        }

        //validación password
        if (password.length < 6 || password.length > 10) {
            return res.status(400).json({
                success: false,
                message: "Password must be between 6 and 10 characters"
            })
        }

        //validación email
        const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (!validEmail.test(email) ){
            return res.status(400).json(
            {
            success: false,
            message: "format email invalid"
            }
            )
        }

        //Tratamos la data si fuera necesario
        const passwordEncrypted = bcrypt.hashSync(password, 8)
        console.log(passwordEncrypted)

        //Guardamos el usuario en la base de datos
        const newUser = await User.create({
            name: name,
            email: email,
            password: passwordEncrypted,
            role: { id: 2 }
            //roleId: 2 
            //dos opciones de meter el role, dependiendo de si usamos @Column o @JoinColumn
        }).save()

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: newUser
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User can't be registered",
            error: error
        })
    }
}