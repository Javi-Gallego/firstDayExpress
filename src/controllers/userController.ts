import { Request, Response } from "express"
import { User } from "../models/User"

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find({
            select: {
                id: true,
                name: true,
                email: true,
                createdAt: true,
                updatedAt: true,
                roleId: true
            }
        })

        return res.status(200).json({
            success: true,
            message: "Users retrieved successfully",
            data: users
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Users can't be retrieved",
            error: error
        })
    }
    
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