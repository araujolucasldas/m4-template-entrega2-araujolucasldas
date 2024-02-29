import { GenerateId, booksDatabase } from "../database/database"
import { Ibook, TUpdateBook } from "../interfaces/books.interfaces"

export class BooksServices{
    createBook(name: string, pages: number, category: string) {
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

    getBooks() {
        return booksDatabase
    }

    getOneBook(id: string) {
        const findBook = booksDatabase.find(book => book.id === Number(id))

        return findBook
    }
 
    updateBook(id: string, data: TUpdateBook){
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

    deleteBook(id: string) {
        const index = booksDatabase.findIndex(book => book.id === Number(id))

        booksDatabase.splice(index, 1)

    }
}