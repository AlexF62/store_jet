import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { returnCategoryObject } from './return-category.object';
import { CategoryDto } from './category.dto';
import { generateSlug } from 'src/utils/generate-slug';

@Injectable()
export class CategoryService {
    constructor(private prisma: PrismaService) {}

    async byId(id:number) {
        const category = await this.prisma.category.findUnique({
            where: {
                id
            },
            select: returnCategoryObject
        })
        if(!category) {
            throw new Error('Category not found')
        }
        return category
    }
    async bySlug(slug: string) {
        const category = await this.prisma.category.findUnique({
            where: {
                slug
            },
            select: returnCategoryObject
        })
        if(!category) {
            throw new NotFoundException('Category not found')
        }
        return category
    }

    async getAll() {
        return this.prisma.category.findMany({
            select: returnCategoryObject
        })
    }

    async create(categoryDto:CategoryDto) {
        return this.prisma.category.create({
            data: {
                name: categoryDto.name ,
                slug: generateSlug(categoryDto.name),
            }
        })
    }

    async update(id: number, categoryDto: CategoryDto) {
        return this.prisma.category.update({
            where: {
                id
            },
            data: {
                 name: categoryDto.name,
                 slug: generateSlug(categoryDto.name)
            }
        })
    }
    async delete(id: number, ) {
        return this.prisma.category.delete({
            where: {
                id
            },
            
        })
    }
}










