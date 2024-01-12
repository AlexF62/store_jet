import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './auth.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { Auth } from './decorators/auth.decorators';



@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  
  @Post('register')
  async register(@Body() authDto: AuthDto) {
    return this.authService.register(authDto)
  }
  

  @Post('login')
  async login(@Body() authDto:AuthDto) {
      return this.authService.login(authDto)
  }



  @Auth()
  @Post('login/access-token')
  async getNewTokens(@Body() refreshTokenDto:RefreshTokenDto) {
      return this.authService.getNewTokens(refreshTokenDto.refreshToken)
  }
}


