import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { productReturnObject } from 'src/product/retutrn-product.object';
import { OrderDto } from './order.dto';


@Injectable()
export class OrderService {
    constructor(private prisma: PrismaService) {}

    async getAll() {
        return this.prisma.order.findMany({
            
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                items: {
                    include: {
                        Product: {
                            select: productReturnObject
                        }
                    }
                }
            }
        })
    }

    async getByUserId(userId: number) {
        return this.prisma.order.findMany({
            where: {
                userId
            },
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                items: {
                    include: {
                        Product: {
                            select: productReturnObject
                        }
                    }
                }
            }
        })
    }

    async placeOrder(dto: OrderDto, userId: number) {
         const total = dto.items.reduce((acc, item) => {
            return acc + item.price * item.quantity
         }, 0)

        const order = await this.prisma.order.create({
            data: {
                status: dto.status,
                items: {
                    create: dto.items
                },
                total,
                User: {
                  connect: {
                    id: userId
                  }
                }
            }
        })
        return order
    }

    // async updateStatus(dto: PaymentStatusDto) {
    //     if(dto.event === 'payment.waiting_for_capture') 
    //     return 
    // const payment = await
    // }
}
