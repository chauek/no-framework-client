class TodosStore {
    #todos = [];
    #listeners = [];

    setState(newTodos) {
        this.#todos = newTodos;
        this.#listeners.forEach( listener => listener(this.#todos));
    }

    subscribe(listener) {
        listener(this.#todos);
        this.#listeners.push(listener);
    }
}

export const todos = new TodosStore();
