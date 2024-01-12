import { Body, Controller, Get, Param, Patch, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import {  UserService } from './user.service';
import { Auth } from 'src/auth/decorators/auth.decorators';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { UserDto } from './user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService:  UserService) {}

 
 @Get('profile')
 @Auth()
  async getProfile(@CurrentUser('id') id: number) {
      return this.userService.getUserById(id)
  }

  

  @Auth()
  @Put('profile')
  async getNewTokens(@CurrentUser('id') id: number, @Body() userDto:UserDto) {
      return this.userService.updateProfile(id, userDto)
  }
 
  @Auth()
  @Patch('profile/favorites/:productId')
  async toggleFavorite(@Param('productId') productId: string, @CurrentUser('id') id: number) {
      return this.userService.toggleFavorite(id, +productId)
  }

  
}
