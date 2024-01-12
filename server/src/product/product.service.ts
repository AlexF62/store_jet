import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ProductDto } from './product.dto';
import { productReturnObject, productReturnObjectFullSet } from './retutrn-product.object';
import { generateSlug } from 'src/utils/generate-slug';
import { EnumProductSort, GetAllProductDto } from './dto/get-all.product.dto';
import { PaginationService } from 'src/pagination/pagination.service';
import { Prisma } from '@prisma/client';
import { CategoryService } from 'src/category/category.service';
import { convertToNumber } from 'src/utils/convert-to-number';



@Injectable()
export class ProductService {
    constructor(private prisma:PrismaService, private paginationService: PaginationService, private categoryService: CategoryService){}

    async getAll(dto: GetAllProductDto = {
        categoryId: '',
        sale: '',
        brand: ''
    }){
        const {perPage, skip} = this.paginationService.getPagination(dto)
  
          const filters = this.createFilter(dto)
    
    

    
    const products = await this.prisma.product.findMany({
        where: filters,
        orderBy: this.getSortOption(dto.sort),
        skip,
        take: perPage,
        select: productReturnObject
     })

     return {
        products,
        length: await this.prisma.product.count({
            where: filters
        })
     }
    } 

    private createFilter(dto: GetAllProductDto):Prisma.ProductWhereInput {
        const filters: Prisma.ProductWhereInput[] = []

        if(dto.searchTerm) filters.push(this.getSearchTermFilter(dto.searchTerm))

        if(dto.minPrice || dto.maxPrice) filters.push(this.getPriceFilter(
            convertToNumber(dto.minPrice),
            convertToNumber(dto.maxPrice)
        ))

        if(dto.categoryId) filters.push(this.getCategoryFilter(+dto.categoryId))

        return filters.length ? {AND: filters} : {}
    }

    private getSortOption(sort: EnumProductSort): Prisma.ProductOrderByWithRelationInput[] {
        switch(sort) {
            case EnumProductSort.LOW_PRICE:
                return [{price: 'asc'}]
            case EnumProductSort.HIGH_PRICE:
                return [{price: 'desc'}]
            case EnumProductSort.OLDEST:
                return [{createdAt: 'asc'}]
            default:
                return [{createdAt: 'desc'}]            
        }
    }

    private getSearchTermFilter(searchTerm:string):Prisma.ProductWhereInput{
        return {
            OR: [
                {
                Category: {
                    name: {
                        contains: searchTerm,
                        mode: 'insensitive'
                    }
                }
                },
                {
                    name: {
                        contains: searchTerm,
                        mode: 'insensitive'
                    }
                },
                {
                    description: {
                        contains: searchTerm,
                        mode: 'insensitive'
                    }
                }
            ]
        }
    }

   private getPriceFilter(minPrice?:number, maxPrice?:number) {
      let priceFilter: Prisma.IntFilter | undefined = undefined

      if(minPrice){
        priceFilter = {
            ...priceFilter,
            gte: minPrice
        }
      }

      if(maxPrice){
        priceFilter = {
            ...priceFilter,
            lte: maxPrice
        }
      }

      return {
        price: priceFilter
      }
   }

    private getCategoryFilter(categoryId: number):Prisma.ProductWhereInput {
        return {
            categoryId: categoryId
        }
    }

    async getById(id: number) {
        const product = await this.prisma.product.findUnique({
            where: {
                id
            },
            select: productReturnObjectFullSet
        })

        if(!product) throw new NotFoundException('Product not found')
        return product
    }

    async bySlug(slug:string) {
        const product = await this.prisma.product.findUnique({
            where: {
                slug
            },
            select: productReturnObjectFullSet
        })

        if(!product) throw new NotFoundException('Product not found')
        return product
    }

    async byCategory(categorySlug: string) {
        const products = await this.prisma.product.findMany({
            where: {
                Category: {
                    slug: categorySlug
                }
            },
            select: productReturnObjectFullSet
        })

        if(!products) throw new NotFoundException('Product not found')
        return products
    }

    async getSimilar(id:number) {
        const currentProduct = await this.getById(id)

        if(!currentProduct)
        throw new NotFoundException('Current product not found')

        const products = await this.prisma.product.findMany({
            where: {
                Category: {
                    name: currentProduct.Category.name
                },
                NOT: {
                    id: currentProduct.id 
                }
            },

            orderBy: {
                createdAt: 'desc'
            },
            select: productReturnObject
        })

        return products
    }

    async create() {
        const product = await this.prisma.product.create({
            data: {
                description: '',
                name: '',
                price: 0,
                slug: ''
            }
        })
        return product.id
    }

    async update(id:number, dto: ProductDto) {
        const {description, images, price, name, categoryId} = dto
        await this.categoryService.byId(categoryId)

        return this.prisma.product.update({
            where: {
                id
            },
            data: {
                description,
                images,
                price,
                name,
                slug: generateSlug(name),
                Category: {
                    connect: {
                        id: categoryId
                    }
                }
            }
        })
    }
    async delete(id: number) {
        return this.prisma.product.delete({where: {id}})
    }
}
