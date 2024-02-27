
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Role } from "./Role"
import { Loan } from "./Loan"

@Entity("users")
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: "name" })
    name!: string

    @Column({ name: "password" })
    password!: string

    @Column({ name: "email" })
    email!: string

    @Column({ name: "is_active" })
    isActive!: boolean

    @Column({ name: "role_id" })
    roleId!: number

    @Column({ name: "created_at" })
    createdAt!: Date

    @Column({ name: "updated_at" })
    updatedAt!: Date

    @ManyToOne(() => Role, role => role.users)
    @JoinColumn({ name: "role_id" })
    role!: Role

    @OneToMany(() => Loan, loan => loan.users)
    @JoinColumn({ name: "loan_id" })
    loans!: Loan[]
}
