import { Request, Response } from "express"

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

export const createRole = (req: Request, res: Response) => {
    
    //recuperar la info a través del body
    console.log(req.body)

    const { name, email, id } = req.body

    console.log(name)
    console.log(email)
    console.log(id)

    res.status(201).json(
        {
            success: true,
            message: "Role created successfully",
        }
    )
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

