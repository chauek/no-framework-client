class Header extends HTMLElement {
    #title;

    connectedCallback() {
        this.#title = this.getAttribute('title');
        this.render();
    }

    render() {
        this.innerHTML = `
            <header class="header">
                <h1>${this.#title}</h1>
                <input class="new-todo"
                        placeholder="What needs to be done?"
                        autofocus>
            </header>
        `
    }
}

customElements.define('todo-header', Header);
