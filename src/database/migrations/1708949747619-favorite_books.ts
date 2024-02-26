import { MigrationInterface, QueryRunner, Table, TableUnique } from "typeorm";

export class Favorite_books1708949747619 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "favorite_books",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "user_id",
                        type: "int",
                        isNullable: false
                    },
                    {
                        name: "book_id",
                        type: "int",
                        isNullable: false
                    },   
                ],
                foreignKeys: [
                    {
                        columnNames: ["user_id"],
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE",
                    },
                    {
                        columnNames: ["book_id"],
                        referencedTableName: "books",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE",
                    },
                ],
                uniques: [
                    new TableUnique({
                        name: "user_book_unique",
                        columnNames: ["user_id", "book_id"],
                    })
                ],
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("favorite_books")
    }

}
