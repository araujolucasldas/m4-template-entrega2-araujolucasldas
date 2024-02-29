export interface Ibook{
    id: number
    name: string
    pages: number
    category?: string
    createdAt: Date
    updatedAt: Date
}

export type TCreateBook = Pick<Ibook, "name" | "pages"| "category">

export type TUpdateBook = Partial<TCreateBook>

export interface ImodelBook{
    createBook(data: TCreateBook): Ibook
    getBooks(): Ibook[]
    getOneBook(id: number): Ibook | undefined
    updateBook(id: number, data: TUpdateBook): Ibook | undefined
    deleteBook(id: number): object | undefined
}