import { Request, Response } from "express";
import { Author } from "../models/Author";

export const createAuthor = async (req: Request, res: Response) =>  {
    try {
        const { name, nationality} = req.body

        const author = await Author.find({ 
            where: {name: name}
        })

        if(!name){
            return res.status(400).json({
                success: false,
                message: "Author's name is needed"
            })
        }

        if(author){
            return res.status(400).json({
                success: false,
                message: "Author is already in DB"
            })
        }

        const newAuthor = await Author.create({
            name,
            nationality
        }).save()

        return res.status(201).json({
            success: true,
            message: "Author created successfully",
            data: newAuthor
        })


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Author can't be created",
            error: error
        })
    }
}