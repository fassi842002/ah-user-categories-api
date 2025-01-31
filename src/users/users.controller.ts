import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ParseIntPipe } from '@nestjs/common';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Post()
    createUser(@Body() dto: CreateUserDto) {
        return this.usersService.createUser(dto);
    }

    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.getUser(id);
    }
}