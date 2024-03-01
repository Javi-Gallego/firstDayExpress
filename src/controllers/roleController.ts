import { Request, Response } from "express"
import { Role } from "../models/Role"

export const getRoles = (req: Request, res: Response) => {
    
    //recuperar la info a través del body
    console.log(req.body)

    res.status(200).json(
        {
            success: true,
            message: `Role ${req.params.id} retrieved successfully`,
        }
    )
}

export const createRole = async (req: Request, res: Response) => {

    try {
        //recuperar la info a través del body
        console.log(req.body)
        
        const { name } = req.body
        
        if(name.length > 50) {
            return res.status(400).json(
                {
                    success: false,
                    message: "Role name must be under 50 characters long",
                }
            )
        }
    
        const newRole = await Role.create({
            name: name
        }).save()
    
        res.status(201).json(
            {
                success: true,
                message: "Role created successfully",
                data: newRole
            }
        )
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Can't create role",
            error: error
        })
    }   
}

export const updateRole = (req: Request, res: Response) => {

    //recuperar parámetro de la ruta
    req.params.id
    console.log(req.params.id)

    res.status(200).json(
        {
            success: true,
            message: `Role ${req.params.id} updated successfully`,
        }
    )
}

export const deleteRole = (req: Request, res: Response) => {
    
    //recuperar parámetro de la ruta
    req.params.id
    console.log(req.params.id)

    res.status(200).json(
        {
            success: true,
            message: `Role ${req.params.id} deleted successfully`,
        }
    )
}

