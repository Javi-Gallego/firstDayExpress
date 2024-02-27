import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("favorite_books")
export class Favorite extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: "user_id" })
    userId!: number

    @Column({ name: "book_id" })
    bookId!: number

}
