import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

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

}
