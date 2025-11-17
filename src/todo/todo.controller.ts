import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todos')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    @Get()
    getAll(){
        return this.todoService.findAll();
    }

    @Get(':id')
    getOne(@Param('id') id: number){
        return this.todoService.findOne(id);
    }

    @Post()
    create(@Body() dto: CreateTodoDto){
        return this.todoService.create(dto);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() dto: UpdateTodoDto){
        return this.todoService.update(id, dto);
    }

    @Delete(':id')
    remove(@Param('id') id: number){
        return this.todoService.remove(id);
    }
}

