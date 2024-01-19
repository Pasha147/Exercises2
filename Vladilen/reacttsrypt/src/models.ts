export interface IProduct{

    // id?: number не обязательный параметр, id: number обязательный параметр
    id?: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number
        count: number
        }
}