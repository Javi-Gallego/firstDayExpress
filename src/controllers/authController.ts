import { Request, Response } from "express";


export const register = async (req: Request, res: Response) => {
    try {
        console.log(req.body)

        const { email, password } = req.body

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

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: req.body
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User can't be registered",
            error: error
        })
    }
}