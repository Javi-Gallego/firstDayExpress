import "reflect-metadata"
import "dotenv/config"
import { DataSource } from "typeorm"
import { Roles1708945160731 } from "./migrations/1708945160731-roles"
import { Users1708948565273 } from "./migrations/1708948565273-users"
import { Authors1708949717657 } from "./migrations/1708949717657-authors"
import { Books1708949730694 } from "./migrations/1708949730694-books"
import { Loans1708949738502 } from "./migrations/1708949738502-loans"
import { Favorite_books1708949747619 } from "./migrations/1708949747619-favorite_books"
import { AddIsActiveColumnToUsers1709024951852 } from "./migrations/1709024951852-add_is_active_column_to_users"

export const AppDataSource = new DataSource ({
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE || "test",
    entities: [],
    migrations: [
        Roles1708945160731,
        Users1708948565273,
        Authors1708949717657,
        Books1708949730694,
        Loans1708949738502,
        Favorite_books1708949747619
    ],
    synchronize: false,
    logging: false,
})