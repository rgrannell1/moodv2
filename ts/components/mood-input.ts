import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

import * as Events from "../events.ts";

@customElement("mood-input")
export class MoodInput extends LitElement {
  static styles = css`
  :host {
    --mood-bg-0: #c51b7d;
    --mood-bg-1: #e9a3c9;
    --mood-bg-2: #fde0ef;
    --mood-bg-3: #f7f7f7;
    --mood-bg-4: #e6f5d0;
    --mood-bg-5: #a1d76a;
    --mood-bg-6: #4d9221;
    --border-color: black;
  }

  .mood-input {
    display: grid;
    grid-template-columns: repeat(7, 1fr)
    grid-template-rows: 1;
    cursor: pointer;
  }
  .mood-option {
    text-align: center;
    font-size: 1.2em;
    padding: calc(1.5em + 2vw) 0;
    border: 4px solid var(--border-color);
    border-right: 0px;
  }

  h2 {
    font-family: Helvetica;
    font-size: 2em;
  }

  .mood-option:hover {
    filter: brightness(75%);
  }

  .mood-0 {
    grid-row: 1;
    grid-column-start: 1;
    background-color: var(--mood-bg-0);
  }
  .mood-1 {
    grid-row: 1;
    grid-column-start: 2;
    background-color: var(--mood-bg-1);
  }
  .mood-2 {
    grid-row: 1;
    grid-column-start: 3;
    background-color: var(--mood-bg-2);
  }
  .mood-3 {
    grid-row: 1;
    grid-column-start: 4;
    background-color: var(--mood-bg-3);
  }
  .mood-4 {
    grid-row: 1;
    grid-column-start: 5;
    background-color: var(--mood-bg-4);
  }
  .mood-5 {
    grid-row: 1;
    grid-column-start: 6;
    background-color: var(--mood-bg-5);
  }
  .mood-6 {
    grid-row: 1;
    grid-column-start: 7;
    background-color: var(--mood-bg-6);
    border-right: 4px solid var(--border-color);
  }`;

  registerMood(rating: number) {
    let self = this;
    return () => {
      self.dispatchEvent(Events.AddMood({ rating }));
    };
  }
  render() {
    return html`
    <h2>MOOD</h2>
    <section class="mood-input">
      <a @click=${
      this.registerMood(0)
    } class="mood-option mood-0" role="option"></a>
      <a @click=${
      this.registerMood(1)
    } class="mood-option mood-1" role="option"></a>
      <a @click=${
      this.registerMood(2)
    } class="mood-option mood-2" role="option"></a>
      <a @click=${
      this.registerMood(3)
    } class="mood-option mood-3" role="option"></a>
      <a @click=${
      this.registerMood(4)
    } class="mood-option mood-4" role="option"></a>
      <a @click=${
      this.registerMood(5)
    } class="mood-option mood-5" role="option"></a>
      <a @click=${
      this.registerMood(6)
    } class="mood-option mood-6" role="option"></a>
    </section>
    `;
  }
}
