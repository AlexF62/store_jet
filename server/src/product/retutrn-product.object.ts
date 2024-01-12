import { Prisma } from "@prisma/client";
import { returnCategoryObject } from "src/category/return-category.object";

export const productReturnObject: Prisma.ProductSelect = {
    images: true,
    description: true,
    id: true,
    name: true,
    price: true,
    createdAt: true,
    slug: true
}

export const productReturnObjectFullSet: Prisma.ProductSelect = {
    ...productReturnObject,
    Category: {select: returnCategoryObject}
}