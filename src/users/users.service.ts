import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    async createUser(dto: CreateUserDto) {
        const existingUser = await this.prisma.user.findUnique({
            where: { email: dto.email },
        });

        if (existingUser) throw new ConflictException('Email already exists');

        return this.prisma.user.create({ data: dto });
    }

    async getUser(id: number) {
        return this.prisma.user.findUnique({ where: { id }, select: { email: true, categories: true } });
    }
}
