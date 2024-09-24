// src/todo/todo.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  create(todo: Todo): Promise<Todo> {
    return this.todoRepository.save(todo);
  }

  delete(id: number): Promise<void> {
    return this.todoRepository.delete(id).then(() => {});
  }
}
