import { faker } from '@faker-js/faker'
import { PrismaClient, Product } from '@prisma/client'
import * as dotenv from 'dotenv'

dotenv.config()
const prisma = new PrismaClient()

const createProduct = async (quantity:number) => {
    const products: Product[] = []

    for(let i = 0; i < quantity; i++) {
        const productName = faker.commerce.productName()
        const categoryName = faker.commerce.department()

        const product = await prisma.product.create({
            data: {
                name: productName,
                slug: faker.helpers.slugify(productName),
                description: faker.commerce.productDescription(),
                price: +faker.commerce.price({ min: 100, max: 999, dec: 0 }),
                images: Array.from({
                    length: faker.number.int({min: 2, max: 20})
                }).map(() => `/uploads/${faker.number.int({min:1, max: 20})}.png`),
                Category: {
                    create: {
                        name: categoryName,
                        slug: faker.helpers.slugify(categoryName),
                    }
                },
                }
            })
        products.push(product)
       }
    console.log(`Created ${products.length} products`)
}

async function main() {
    console.log('Start seeding...')
    await createProduct(10)
}

main()
.catch(e => console.log(e))
.finally( async () => {
    await prisma.$disconnect()
})