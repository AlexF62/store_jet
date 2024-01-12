import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { UserDto } from './user.dto';
import { hash } from 'argon2';

@Injectable()
export class  UserService {
    constructor(private prisma: PrismaService, ) {}

    async getUserById(id: number, selectObject: Prisma.UserSelect = {}) {
        const user = await this.prisma.user.findUnique({where: {
            id
        },
        
        select: {
          id: true,
          email: true,
          firstName: true,
          password: false,
          phone: true,
          role: true,
          
         
          favorites: {
            select: {
                id: true,
                
                price: true,
                images: true,
                slug: true
            }
          },
          ...selectObject,
        
        },
    })
    if(!user) {
        throw new Error('User not found')
    }

    return user
    }

    async updateProfile(id: number, dto: UserDto) {
       const isSameUser = await this.prisma.user.findUnique({
        where: {email: dto.email}
       })

       if(isSameUser && id !== isSameUser.id) 
        throw new BadRequestException('Email already in use')

        const user = await this.getUserById(id)

        return this.prisma.user.update({
            where: {
                id
            },
            data:{
                email: dto.email,
                firstName: dto.firstName,
                phone: dto.phone,
                password: dto.password ? await hash(dto.password) :
                user.password
            }
        })
       
    }

    async toggleFavorite(userId: number, productId: number) {
        const user = await this.getUserById(userId);
      
        if (!user) {
          throw new NotFoundException('User not found!');
        }
      
        const isExist = user.favorites.some((product) => product.id === productId);
      
        const updatedFavorites = isExist
          ? user.favorites.filter((product) => product.id !== productId)
          : [...user.favorites, { id: productId }];
      
        const updatedFavoriteIds = updatedFavorites.map((product) => ({ id: product.id }));
      
        await this.prisma.user.update({
          where: {
            id: user.id,
          },
          data: {
            favorites: {
              set: updatedFavoriteIds,
            },
          },
        });
      
        return { success: true };
      }
}


