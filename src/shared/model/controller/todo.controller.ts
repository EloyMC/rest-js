import { Controller, Body, Param, Get, Post, Put, Delete } from '@nestjs/common';
import { ToDoService } from '../service/todo.service';
import { ToDo } from '../entity/todo.entity';

@Controller('toDo')
export class ToDoController {
    constructor(private readonly toDoService: ToDoService) {}

    @Get()
    async findAll(): Promise<ToDo[]> {
        return await this.toDoService.findAll() as ToDo[];
    }

    @Get(':id')
    async findById(@Param() params): Promise<ToDo> {
        return await this.toDoService.findById(params.id);
    }

    @Post()
    async create(@Body() toDo: ToDo): Promise<ToDo> {
        return await this.toDoService.insert(toDo) as ToDo;
    }

    @Put(':id')
    async update(@Body() updatedToDo: ToDo, @Param() params): Promise<ToDo> {
        const oldTodo = await this.toDoService.findById(params.id);
        return await this.toDoService.update(oldTodo, updatedToDo);
    }

    @Delete()
    async delete(@Param() params) {
        return await this.toDoService.delete(params.id);
    }
}