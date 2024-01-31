export interface IProduct {
    name: string
    price: number
    description?: string
    images: string[]
    categoryId: number
    products: IProduct[];
}