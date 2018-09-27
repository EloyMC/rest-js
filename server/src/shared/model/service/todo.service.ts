import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ToDo } from '../entity/todo.entity';


@Injectable()
export class ToDoService {
    constructor(
        @InjectRepository(ToDo)
        private readonly toDoRepository: Repository<ToDo>,
    ) {}

    async findAll(): Promise<ToDo[]> {
        try {
        return await this.toDoRepository.find();
        } catch (err) {
            return err;
        }
    }

    async findById(id: number): Promise<ToDo> {
        try {
            return await this.toDoRepository.findOne(id);
        } catch (err) {
            return err;
        }
    }

    async insert(toDo: ToDo): Promise<ToDo> {
        const newToDo = new ToDo();
        Object.keys(toDo).forEach((key) => {
            newToDo[key] = toDo[key];
        });

        try {
            return await this.toDoRepository.save(newToDo);
        } catch (err) {
            return err;
        }
    }

    async update(toDo: ToDo, update: ToDo): Promise<ToDo> {
        const updatedToDo = toDo;
        Object.keys(update).forEach((key) => {
            updatedToDo[key] = update[key];
        });

        try {
            return await this.toDoRepository.save(updatedToDo);
        } catch (err) {
            return err;
        }
    }

    async delete(id: number) {
        try {
            return await this.toDoRepository.delete(id);
        } catch (err) {
            return err;
        }
    }
}