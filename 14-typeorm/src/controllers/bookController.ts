import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Book } from "../entity/Book";
import { Author } from "../entity/Author";
import { In } from "typeorm";

const bookRepository = AppDataSource.getRepository(Book);
const authorRepository = AppDataSource.getRepository(Author);

export const createBook = async (req: Request, res: Response) => {
  const { title, authorIds } = req.body;

  const authors = await authorRepository.findBy({
    id: In(authorIds)
  });
  
  const newBook = bookRepository.create({ title, authors });
  await bookRepository.save(newBook);
  res.status(201).json(newBook);
};

export const getBooks = async (req: Request, res: Response) => {
  const books = await bookRepository.find({ relations: ["authors"] });
  res.status(200).json(books);
};

export const getBookById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const book = await bookRepository.findOne({ where: { id: parseInt(id) }, relations: ["authors"] });
  
  if (!book) {
    res.status(404).json({ message: "Book not found" });
  }
  res.status(200).json(book);
};

export const updateBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, authorIds } = req.body;

  const book = await bookRepository.findOne({ where: { id: parseInt(id) } });
  
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  const authors = await authorRepository.findBy({
    id: In(authorIds)
  });

  book.title = title;
  book.authors = authors;

  await bookRepository.save(book);
  res.status(200).json(book);
};

export const deleteBook = async (req: Request, res: Response) => {
  const { id } = req.params;

  const book = await bookRepository.findOne({ where: { id: parseInt(id) } });
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  await bookRepository.remove(book);
  res.status(204).send();
};
