import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Author } from "./Author"
import { join } from "path"
import { Loan } from "./Loan"
import { Favorite } from "./Favorite"

@Entity("books")

export class Book extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: "title" })
    title!: string

    @Column({ name: "genre" })
    genre!: string

    @Column({ name: "author_id" })
    authorId!: number

    @Column({ name: "created_at" })
    createdAt!: Date

    @Column({ name: "updated_at" })
    updatedAt!: Date

    @ManyToOne(() => Author, author => author.books)
    @JoinColumn({ name: "author_id" })
    author!: Author

    @OneToMany(() => Loan, loan => loan.books)
    @JoinColumn({ name: "loan_id" })
    loans!: Loan[]

    @OneToMany(() => Favorite, favorite => favorite.book)
    @JoinColumn({ name: "favorite_id" })
    favorites!: Favorite[]
}
