import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  public todoTitle: string = 'Lista: ';
  public todoEmpty: string = 'Nenhum item na lista...';
  public alterTitle: boolean = false;
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.load();
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30)
      ])]
    });
  }

  alterarTitle(): void {
    if (this.alterTitle == false) {
      this.alterTitle = true;
      this.title = this.title2;
    }
    else {
      this.alterTitle = false;
      this.title = this.title1;
    }
  }

  add(): void {
    const id = this.todos.length + 1;
    const title = this.form.controls['title'].value;
    this.todos.push(new Todo(id, title, false));
    this.save();
    this.clear();
  }

  clear() {
    this.form.reset();
  }

  markAsDone(todo: Todo): void {
    todo.done = true;
    this.save();
  }

  markAsUndone(todo: Todo): void {
    todo.done = false;
    this.save();
  }

  remove(todo: Todo): void {
    const index: number = this.todos.indexOf(todo);

    if (index !== -1)
      this.todos.splice(index, 1);

    this.save();
  }

  save(): void {
    sessionStorage.setItem('todos', JSON.stringify(this.todos));
  }

  load(): void {
    const data = sessionStorage.getItem('todos');
    if (data)
      this.todos = JSON.parse(data);
    else
      this.todos = [];
  }
}
