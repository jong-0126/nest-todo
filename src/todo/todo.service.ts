import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';


@Injectable()
export class TodoService {

    constructor(
        @InjectRepository(Todo)
        private readonly todoRepo: Repository<Todo>,
    ){}

    findAll(){
        return this.todoRepo.find({
            order: {id: 'ASC'},
        });
    }

    async findOne(id: number){
        return await this.todoRepo.findOneBy({id});
    }

    async create(dto: CreateTodoDto){
        const todo = this.todoRepo.create({text: dto.text});    
        return await this.todoRepo.save(todo);
    }

    async update(id: number, dto: UpdateTodoDto) {
        const todo = await this.todoRepo.findOneBy({id});
        if(!todo) return null; 
        Object.assign(todo, dto);
        return await this.todoRepo.save(todo);
    }

    async remove(id: number){
        await this.todoRepo.delete(id);
        return { message: '삭제 완료'};
    }
}
