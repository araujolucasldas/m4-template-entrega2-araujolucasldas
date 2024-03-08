import { Router } from "express";
import { BooksControllers } from "../controllers/books.controllers";
import { DoesBookExist, isBookNameValid } from "../middleware/books.middlewares";
import { ValidateBooks } from "../middleware/validateBooks.middleware";
import { createBookSchema, editBooksSchema } from "../schemas/books.schema";

export const booksRouter = Router()

const booksControllers = new BooksControllers()

booksRouter.post("/", isBookNameValid.execute, ValidateBooks.execute({body: createBookSchema}),booksControllers.createBook)

booksRouter.get("/", booksControllers.getBooks)

booksRouter.get("/:id", DoesBookExist.execute, booksControllers.getOneBook)

booksRouter.patch("/:id", DoesBookExist.execute, isBookNameValid.execute, ValidateBooks.execute({body: editBooksSchema}),booksControllers.updateBook)

booksRouter.delete("/:id", DoesBookExist.execute, booksControllers.deleteBook)
