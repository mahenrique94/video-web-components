import { component, useState } from 'haunted'
import { html } from 'lit-html'

const Todo = () => {
    const [task, updateTask] = useState('')
    const [tasks, updateTasks] = useState([])

    const handleInput = event => updateTask(event.target.value)

    const handleSubmit = event => {
        event.preventDefault()
        if (task.trim()) {
            updateTasks([
                ...tasks,
                task
            ])
            updateTask('')
        }
    }

    return html`
        <style>
            .input {
                border: 1px solid #dcdcdc;
                border-radius: 5px;
                color: #595959;
                font-size: 1.1rem;
                outline: none;
                padding: .5rem 1rem;
                vertical-align: middle;
                width: 80%;
            }
            .input:focus {
                box-shadow: 0 0 5px rgba(0, 0, 0, .2);
            }
            .button {
                background: #00cc99;
                border: none;
                border-radius: 3px;
                color: #fdfdfd;
                outline: none;
                padding: .75rem;
            }
            .button:hover {
                background: #00b386;
                cursor: pointer;
            }
            .list {
                margin: 0;
                margin-top: 1rem;
                padding: 0;
            }
            .item {
                list-style: none;
            }
        </style>
        <form @submit=${handleSubmit}>
            <input class="input" maxlength="120" @input=${handleInput} type="text" .value="${task}">
            <button class="button" type="submit">Add</button>
        </form>
        <ul class="list">
            ${tasks.map(t => html`<li class="item">${t}</li>`)}
        </ul>
    `
}

customElements.define('wc-todo', component(Todo))
