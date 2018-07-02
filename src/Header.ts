import {Component, Input, Output, EventEmitter, Inject} from 'angular2/core';
import {Todo} from "./Todo";
import {TodoStore} from "./state/TodoStore";


@Component({
    selector:'todo-header',
    template: `
        <header id="header">
            <h1>todos</h1>
            <form id="todo-form" (ngSubmit)="addTodo(input)" autocomplete="off">
                <input id="new-todo" placeholder="What needs to be done?" #input>
            </form>
        </header>
    `
})
export class Header {

	constructor(private todoStore: TodoStore) {

	}

    addTodo(input) {
		let newTodo = new Todo({id:Math.random(), description:input.value});
		this.todoStore.addTodo(newTodo);

		input.value = "";
    }

}