import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: any[] = [];
  public title1: string = 'Minhas tarefas';
  public title2: string = 'Minhas tarefas alteradas';
  public title: string = this.title1;
  public alterTitle: boolean = false;

  constructor() {
    this.todos.push('Passear com o cachorro');
    this.todos.push('Ir ao supermercado');
    this.todos.push('Cortar o cabelo');
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
}
