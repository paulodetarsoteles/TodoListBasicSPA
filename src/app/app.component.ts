import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = [];
  public title1: string = 'Minhas tarefas';
  public title2: string = 'Minhas tarefas alteradas';
  public title: string = this.title1;
  public alterTitle: boolean = false;

  constructor() {
    this.todos.push(new Todo(1, 'Passear com o cachorro', true));
    this.todos.push(new Todo(2, 'Ir ao supermercado', false));
    this.todos.push(new Todo(3, 'Tirar o lixo', false));
    this.todos.push(new Todo(4, 'Cortar o cabelo', false));
  }

  alterarTitle(): void {
    if (this.alterTitle == false) {
      this.alterTitle = true;
    }
    else
      this.alterTitle = false;

    if (this.alterTitle == true) {
      this.title = this.title2;
      return;
    }

    this.title = this.title1;
  }

  remove(todo: Todo): void {
    const index: number = this.todos.indexOf(todo);
    if (index !== -1)
      this.todos.splice(index, 1);
    else
      return;
  }

  markAsDone() {

  }

  markAsUndone() {

  }
}
