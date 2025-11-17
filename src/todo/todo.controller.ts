import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    @Get()
    getAll(){
        return this.todoService.findAll();
    }

    @Post()
    create(@Body('text') text: string){
        return this.todoService.create(text);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() body){
        return this.todoService.update(id, body);
    }

    @Delete(':id')
    remove(@Param('id') id: number){
        return this.todoService.remove(id);
    }
}

