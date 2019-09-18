import { component } from 'haunted'
import { html } from 'lit-html'

const Title = ({ title }) => html`
    <style>
        .title {
            color: #333333;
        }
    </style>
    <h1 class="title">${title}</h1>
`

customElements.define('wc-title', component(Title))
