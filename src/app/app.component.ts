import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: any[] = [];
  public title: string = 'Minhas tarefas';

  constructor() {
    this.todos.push('Passear com o cachorro');
    this.todos.push('Ir ao supermercado');
    this.todos.push('Cortar o cabelo');
  }
}
