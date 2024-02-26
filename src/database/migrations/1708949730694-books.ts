import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Books1708949730694 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "books",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "title",
                        type: "varchar",
                        length: "255",
                        isNullable: false

                    },
                    {
                        name: "genre",
                        type: "varchar",
                        length: "50",
                        isNullable: false,
                        isUnique: true
                    },
                    {
                        name: "author_id",
                        type: "int",
                        isNullable: false
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
                    columnNames: ["author_id"],
                    referencedTableName: "authors",
                    referencedColumnNames: ["id"],
                    onDelete: "CASCADE",
                    },
                ],
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("books")
    }

}
