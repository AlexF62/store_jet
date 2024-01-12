import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { OrderService } from './order.service';
import { Auth } from 'src/auth/decorators/auth.decorators';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { OrderDto } from './order.dto';


@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  @Auth('admin')
  getAll(@CurrentUser('id')userId: number ) {
    return this.orderService.getAll()
  }

  @Get('by-user')
  @Auth()
  getByUserId(@CurrentUser('id')userId: number ) {
    return this.orderService.getByUserId(userId)
  }

  

 
  @Post()
  @Auth()
  placeOrder(@Body() orderDto: OrderDto, @CurrentUser('id') userId: number) {
    return this.orderService.placeOrder(orderDto, userId)
  }

  // @Post('status')
  // async updateStatus(@Body() dto: PaymentStatusDto) {
  //   return this.orderService.updateStatus(dto)
  // }
}
