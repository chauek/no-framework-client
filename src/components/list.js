import {todos} from '../store/todos.store.js';

class List extends HTMLElement {
    #items = [];

    static get observedAttributes() {
        return ['items'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.#items = newValue.split(',');
        this.render();
    }

    connectedCallback() {
        todos.subscribe(this.render.bind(this));
    }

    render(items = []) {
        this.innerHTML = `
            <ul class="todo-list">
                ${ items.map( item => (
                    `<li>
                        <div class="view">
                            <input class="toggle" type="checkbox" />
                            <label>${item}</label>
                            <button class="destroy" >x</button>
                        </div>
                    </li>`
                    ))}
            </ul>
        `
    }
}

customElements.define('todo-list', List);
