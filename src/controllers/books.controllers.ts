import { Request, Response } from "express";
import { Ibook, ImodelBook, TCreateBook } from "../interfaces/books.interfaces";
import { GenerateId, booksDatabase } from "../database/database";
import { BooksServices } from "../services/books.services";

export class BooksControllers {
    createBook(req: Request, res: Response) {
        const booksServices = new BooksServices()

        const response = booksServices.createBook(req.body.name, req.body.pages, req.body.category)

        return res.status(201).json(response)
    }

    getBooks(req: Request, res: Response) {
        const booksServices = new BooksServices()

        const response = booksServices.getBooks()

        return res.status(200).json(response)
    }

    getOneBook(id: number, req: Request, res: Response) {
        const booksServices = new BooksServices()

        const response = booksServices.getOneBook(req.params.id)

        return res.status(200).json(response)
    }

    updateBook(id: number, req: Request, res: Response) {
        const booksServices = new BooksServices()

        const response = booksServices.updateBook(req.params.id, req.body)

        return res.status(200).json(response)
    }

    deleteBook(id: number, req: Request, res: Response) {
        const booksServices = new BooksServices()

        const response = booksServices.deleteBook(req.params.id)

        return res.status(204).json()
    }
}