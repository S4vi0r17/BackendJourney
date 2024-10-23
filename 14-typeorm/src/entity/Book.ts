import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Author } from "./Author";

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToMany(() => Author, (author) => author.books)
  @JoinTable() // Esta tabla intermedia almacenará las relaciones entre libros y autores.
  authors: Author[];
}

// "strictPropertyInitialization": false,
