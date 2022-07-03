import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import * as Events from "../events.ts";

@customElement("energy-input")
export class EnergyInput extends LitElement {
  static styles = css`
  :host {
    --energy-bg-0: #edf8e9;
    --energy-bg-1: #c7e9c0;
    --energy-bg-2: #a1d99b;
    --energy-bg-3: #74c476;
    --energy-bg-4: #41ab5d;
    --energy-bg-5: #238b45;
    --energy-bg-6: #005a32;
    --border-color: black;
  }

  h2 {
    font-family: Helvetica;
    font-size: 2em;
  }

  .energy-input {
    display: grid;
    grid-template-columns: repeat(7, 1fr)
    grid-template-rows: 1;
  }
  .energy-option {
    text-align: center;
    font-size: 1.2em;
    padding: calc(1.5em + 2vw) 0;
    border: 4px solid var(--border-color);
    border-right: 0px;
    cursor: pointer;
  }

  .energy-option:hover {
    filter: brightness(75%);
  }

  .energy-0 {
    grid-row: 1;
    background-color: var(--energy-bg-0);
  }
  .energy-1 {
    grid-row: 1;
    grid-column-start: 2;
    background-color: var(--energy-bg-1);
  }
  .energy-2 {
    grid-row: 1;
    grid-column-start: 3;
    background-color: var(--energy-bg-2);
  }
  .energy-3 {
    grid-row: 1;
    grid-column-start: 4;
    background-color: var(--energy-bg-3);
  }
  .energy-4 {
    grid-row: 1;
    grid-column-start: 5;
    background-color: var(--energy-bg-4);
  }
  .energy-5 {
    grid-row: 1;
    grid-column-start: 6;
    background-color: var(--energy-bg-5);
  }
  .energy-6 {
    grid-row: 1;
    grid-column-start: 7;
    background-color: var(--energy-bg-6);
    border-right: 4px solid var(--border-color);
  }`;

  registerEnergy(rating: number) {
    return () => {
      this.dispatchEvent(Events.AddEnergy({ rating }));
    };
  }

  render() {
    return html`
    <h2>ENERGY</h2>
    <section class="energy-input">
      <a @click=${
      this.registerEnergy(0)
    } class="energy-option energy-0" role="option"></a>
      <a @click=${
      this.registerEnergy(1)
    } class="energy-option energy-1" role="option"></a>
      <a @click=${
      this.registerEnergy(2)
    } class="energy-option energy-2" role="option"></a>
      <a @click=${
      this.registerEnergy(3)
    } class="energy-option energy-3" role="option"></a>
      <a @click=${
      this.registerEnergy(4)
    } class="energy-option energy-4" role="option"></a>
      <a @click=${
      this.registerEnergy(5)
    } class="energy-option energy-5" role="option"></a>
      <a @click=${
      this.registerEnergy(6)
    } class="energy-option energy-6" role="option"></a>
    </section>
    `;
  }
}
