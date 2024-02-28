import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Users1708948565273 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "50"
                    },
                    {
                        name: "email",
                        type: "varchar",
                        length: "100",
                        isNullable: false,
                        isUnique: true
                    },
                    {
                        name: "password",
                        type: "varchar",
                        length: "255",
                        isNullable: false
                    },
                    {
                        name: "is_active",
                        type: "boolean",
                        default: true,
                        isNullable: false
                    },
                    {
                        name: "role_id",
                        type: "int",
                        default: 2
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                        isNullable: false
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                        onUpdate: "now()",
                        isNullable: false
                    },    
                ],
                foreignKeys: [
                    {
                    columnNames: ["role_id"],
                    referencedTableName: "roles",
                    referencedColumnNames: ["id"],
                    onDelete: "CASCADE",
                    },
                ],
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}
