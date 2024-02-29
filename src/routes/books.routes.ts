import { Router } from "express";
import { BooksControllers } from "../controllers/books.controllers";
import { DoesBookExist, isBookNameValid } from "../middleware/books.middlewares";

export const booksRouter = Router()

const booksControllers = new BooksControllers()

booksRouter.post("/", isBookNameValid.execute, booksControllers.createBook)

booksRouter.get("/", booksControllers.getBooks)

booksRouter.get("/:id", DoesBookExist.execute, booksControllers.getOneBook)

booksRouter.patch("/:id", DoesBookExist.execute, isBookNameValid.execute, booksControllers.updateBook)

booksRouter.delete("/:id", DoesBookExist.execute, booksControllers.deleteBook)
