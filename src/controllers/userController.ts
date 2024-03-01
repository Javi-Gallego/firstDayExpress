import { Request, Response } from "express"
import { User } from "../models/User"
import { FindOperator, Like } from "typeorm"

export const getUsers = async (req: Request, res: Response) => {
    try {

        interface queryFilterI{
            email?: FindOperator<string>
            name?: FindOperator<string>
        }

        const queryFilters: queryFilterI = {}

        if(req.query.email){
            queryFilters.email = Like("%"+req.query.email.toString()+"%")
        }
        if(req.query.name){
            queryFilters.name = Like("%"+req.query.name.toString()+"%")
        }

        // interface queryFiltersE{
        //     email?: string
        //     name?: string
        // }
        // const queryFilters: queryFiltersE = {}
        // if(req.query.email){
        //     queryFilters.email = req.query.email
        // }
        // if(req.query.name){
        //     queryFilters.name = req.query.name
        // }

        const users = await User.find({
            where: queryFilters,
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

export const getUserById = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id

        const user = await User.findOneBy({
            id: parseInt(userId)
        })

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        return res.status(200).json({
            success: true,
            message: "User retrieved successfully",
            data: user
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User can't be retrieved",
            error: error
        })
    }   
}

export const updateUserById = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id

        const user = await User.findOneBy({
            id: parseInt(userId)
        })

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        //tratar datos

        const userUpdated = await User.update({
            id: parseInt(userId)
            },
            req.body
        )

        return res.status(200).json({
            success: true,
            message: "User retrieved successfully",
            data: userUpdated
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User can't be retrieved",
            error: error
        })
    }   
}

export const deleteUserById = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id

        const user = await User.findOneBy({
            id: parseInt(userId)
        })

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        const userDeleted = await User.remove(user)

        return res.status(200).json({
            success: true,
            message: "User deleted successfully",
            data: userDeleted
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User can't be deleted",
            error: error
        })
    }   
}

export const getProfile = async (req: Request, res: Response) => {
    try {
        return res.status(201).json({
            success: true,
            message: "User updated successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User can't be updated",
            error: error
        })
    }
}

export const updateProfile = async (req: Request, res: Response) => {
    try {

        const { name, email, } = req.body
        const userId = req.tokenData.userId

        const updatedUser = User.update(

            { id: userId },
            { 
                name,
                email
            }
        )

        return res.status(201).json({
            success: true,
            message: "User updated successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User can't be updated",
            error: error
        })
    }
}