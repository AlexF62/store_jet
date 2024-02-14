export interface IProduct {
    slug: string
    name: string
    price: number
    description?: string
    images: string[]
    categoryId: number
    products: IProduct[];
}