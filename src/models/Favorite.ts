import { on } from "events"
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"
import { Book } from "./Book"

@Entity("favorite_books")
export class Favorite extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: "user_id" })
    userId!: number

    @Column({ name: "book_id" })
    bookId!: number

    @ManyToOne(() => User, user => user.favorites)
    @JoinColumn({ name: "user_id" })
    user!: User

    @ManyToOne(() => Book, book => book.favorites)
    @JoinColumn({ name: "book_id" })
    book!: Book
}
