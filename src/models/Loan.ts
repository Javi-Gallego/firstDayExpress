import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"
import { Book } from "./Book"

@Entity("loans")
export class Loan extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    user_id!: number

    @Column()
    book_id!: number

    @Column()
    loan_date!: Date

    @Column()
    due_date!: Date

    @Column()
    return_date!: Date

    @ManyToOne(() => User, user => user.loans)
    @JoinColumn({ name: "user_id" })
    users!: User

    @ManyToOne(() => Book, book => book.loans)
    @JoinColumn({ name: "book_id" })
    books!: Book
}
