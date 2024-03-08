import { AnyZodObject } from "zod"
import { GenerateId, booksDatabase } from "../database/database"
import { Ibook, TCreateBook, TUpdateBook } from "../interfaces/books.interfaces"

export class BooksServices{
    createBook(name: string, pages: number, category: string): Ibook {
        const getDate = new Date()

        const newBook: Ibook = {
            id: GenerateId(),
            name,
            pages,
            category,
            createdAt: getDate,
            updatedAt: getDate
        }

        booksDatabase.push(newBook)

        return newBook
    }

    getBooks(search?: string): Ibook[] {
        if(search){
            const bookResearch = booksDatabase.filter(book => book.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

            return bookResearch
        } else{
            return booksDatabase
        }
    }

    getOneBook(id: number): Ibook | undefined {
        const findBook = booksDatabase.find(book => book.id === Number(id))

        return findBook
    }
 
    updateBook(id: number, data: TUpdateBook): Ibook | undefined{
        const currentBook = booksDatabase.find(book => book.id === Number(id))

        if (currentBook) {
            const index = booksDatabase.findIndex(book => book.id === Number(id))

            const getDate = new Date()

            const updatedBook: Ibook = {
                ...currentBook,
                ...data,
                updatedAt: getDate
            }

            booksDatabase.splice(index, 1, updatedBook)
            return updatedBook
        }
    }

    deleteBook(id: number) {
        const index = booksDatabase.findIndex(book => book.id === Number(id))

        booksDatabase.splice(index, 1)

    }
}