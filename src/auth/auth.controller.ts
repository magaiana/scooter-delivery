import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth/jwt-auth.guard';
import { Role } from 'generated/prisma';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() body: {email: string; password: string; phone: string, role: Role}){
    return this.authService.register(body);
  }

  @Post('login')
  async login(@Body() body: {email: string; password: string}) {
    return this.authService.login(body);
  }
}
