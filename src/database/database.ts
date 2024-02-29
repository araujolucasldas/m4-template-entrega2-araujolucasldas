import { Ibook } from "../interfaces/books.interfaces";

export const booksDatabase: Ibook[] = []

let id = 0

export const GenerateId = ()=>{
    id++
    return id
}