import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/vocab-term/vocab-term.js";

// @feedback this is not the vocab-term, this is the app
// I have taken the liberty of adding in the import that visualizes
// the term which you copied the stub code for.
// the scope of this element is to save data in a database
// and then query a segment of text and return the possible words that it discovered
export class VocabTermApp extends LitElement {
    static get tag() {
        return 'vocab-term-app'
    }

    static get properties() {
		return {
			addEnd: { type: String },
            getEnd: { type: String },
			term: { type: String },
            def: { type: String },
            links: { type: Array }
		}
	}

	constructor() {
		super();
        this.addEnd = '/api/addWord.js';
        this.getEnd = '/api/getWords.js';
		this.term = '';
        this.def = '';
        this.links = [];
	}

    async getData() {

    }

    render() {
        return html`
            <vocab-term>
                <details>
                <summary>Coffee</summary>
                <p slot="information">Bean juice made into warm beverage.</p>
                <ul class="links">
                    <li><a href="https://www.starbucks.com/">Link to starbucks information</a></li>
                </ul>
                </details>
            </vocab-term>
        `;
    }
}
customElements.define(VocabTermApp.tag, VocabTermApp);