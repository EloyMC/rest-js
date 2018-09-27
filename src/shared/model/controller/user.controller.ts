import { Controller, Body, Param, Get, Post, Put, Delete } from '@nestjs/common';
import { User } from '../entity/user.entity';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async findAll(): Promise<User[]> {
        return await this.userService.findAll() as User[];
    }

    @Get(':id')
    async findById(@Param() params): Promise<User> {
        return await this.userService.findById(params.id);
    }

    @Post()
    async create(@Body() user: User): Promise<User> {
        return await this.userService.insert(user) as User;
    }

    @Put(':id')
    async update(@Body() user: User, @Param() params): Promise<User> {
        const oldUser = await this.userService.findById(params.id);
        return await this.userService.update(oldUser, user);
    }

    @Delete()
    async delete(@Param() params) {
        return await this.userService.delete(params.id);
    }
}