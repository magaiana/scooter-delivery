import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth/jwt-auth.guard';

@Controller('scooters')
export class ScootersController {

    @UseGuards(JwtAuthGuard)
    @Get()
    findAll(){
    return 'This is a protected route';
    }
}
