import { Request, Response } from "express"

export const getRoles = (req: Request, res: Response) => {
    res.status(200).json(
        {
            success: true,
            message: "Roles retrieved successfully",
        }
    )
}

export const createRole = (req: Request, res: Response) => {
    res.status(201).json(
        {
            success: true,
            message: "Roles created successfully",
        }
    )
}

export const updateRole = (req: Request, res: Response) => {
    res.status(200).json(
        {
            success: true,
            message: "Roles updated successfully",
        }
    )
}

export const deleteRole = (req: Request, res: Response) => {
    res.status(200).json(
        {
            success: true,
            message: "Roles deleted successfully",
        }
    )
}

