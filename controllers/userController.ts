import { Request, Response } from "express"

export const getUsers = (req: Request, res: Response) => {
    res.status(200).json(
        {
            success: true,
            message: "User retrieved successfully",
        }
    )
}

export const createUser = (req: Request, res: Response) => {
    res.status(201).json(
        {
            success: true,
            message: "User created successfully",
        }
    )
}

export const updateUser = (req: Request, res: Response) => {
    res.status(200).json(
        {
            success: true,
            message: "User updated successfully",
        }
    )
}

export const deleteUser = (req: Request, res: Response) => {
    res.status(200).json(
        {
            success: true,
            message: "User deleted successfully",
        }
    )
}