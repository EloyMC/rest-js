import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToDoService } from '../service/todo.service';
import { ToDoController } from '../controller/todo.controller';
import { ToDo } from '../entity/todo.entity';


@Module({
    imports: [TypeOrmModule.forFeature([ToDo])],
    providers: [ToDoService],
    controllers: [ToDoController],
    exports: [ToDoService],
})

export class ToDoModule {}