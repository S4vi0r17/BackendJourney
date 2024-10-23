import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Author } from "../entity/Author";

const authorRepository = AppDataSource.getRepository(Author);

export const createAuthor = async (req: Request, res: Response) => {
  const { name } = req.body;
  const newAuthor = authorRepository.create({ name });
  await authorRepository.save(newAuthor);
  return res.status(201).json(newAuthor);
};

export const getAuthors = async (req: Request, res: Response) => {
  const authors = await authorRepository.find({ relations: ["books"] });
  return res.status(200).json(authors);
};

export const getAuthorById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const author = await authorRepository.findOne({ where: { id: parseInt(id) }, relations: ["books"] });

  if (!author) {
    return res.status(404).json({ message: "Author not found" });
  }

  return res.status(200).json(author);
};

export const updateAuthor = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;

  const author = await authorRepository.findOne({ where: { id: parseInt(id) } });
  if (!author) {
    return res.status(404).json({ message: "Author not found" });
  }

  author!.name = name;
  await authorRepository.save(author!);
  return res.status(200).json(author);
};

export const deleteAuthor = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;

  const author = await authorRepository.findOne({ where: { id: parseInt(id) } });
  if (!author) {
    return res.status(404).json({ message: "Author not found" });
  }

  await authorRepository.remove(author);
  return res.status(204).send();
};
