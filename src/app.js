import {todos} from './store/todos.store.js';
import './components/header.js';
import './components/list.js';

export class App {
    #items = [];

    async loadAllItems() {
        const resp = await fetch('https://jsonplaceholder.typicode.com/todos');
        const items =await resp.json();
        this.#items = items.map(item => item.title );
        todos.setState(this.#items);
        this.render();
    }

    render() {
        document.body.innerHTML = `
            <section class="todoapp">
                <todo-header title="App"></todo-header>
                <section class="main">
                    <todo-list items='${this.#items}'></todo-list>
                </section>
            </section>
        `
    }
}
