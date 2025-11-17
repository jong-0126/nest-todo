import { Injectable } from '@nestjs/common';

export interface Todo {
    id: number;
    text: string;
    done: boolean;
}

@Injectable()
export class TodoService {
    private todos: Todo[] = [
        { id: 1, text: 'NestJS 배우기', done: false},
    ];

    findAll(){
        return this.todos;
    }

    create(text: string){
        const newTodo = { id: Date.now(), text, done: false};
        this.todos.push(newTodo);
        return newTodo;
    }

    update(id: number, data: Partial<Todo>) {
        const todo = this.todos.find(t => t.id === id);
        if(!todo) return null; 
        Object.assign(todo, data);
        return todo;
    }

    remove(id: number){
        this.todos = this.todos.filter(t => t.id !== id);
        return { message: '삭제 완료'};
    }
}
