import { DataSource } from "typeorm";
import { Author } from "./entity/Author";
import { Book } from "./entity/Book";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "benites1234",
    database: "library_db",
    synchronize: true,
    logging: true,
    entities: [Author, Book]
})
