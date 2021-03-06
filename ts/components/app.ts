import { css, html, LitElement } from "lit";

import { customElement, property } from "lit/decorators.js";
import { MoodController } from "../service.ts";

import "./mood-input.ts";
import "./energy-input";

@customElement("mood-app")
export class MoodApp extends LitElement {
  static styles = css`
  :host {
    --page-bg: #fafa33;
  }

  #mood-app {
    margin: auto;
    position: relative;
    text-align: center;
    max-width: 800px;
  }

  .input-divider {
    padding-bottom: 50px;
  }

  h1 {
    text-align: center;
    font-size: 3em;
    font-family: Helvetica;
  }
  `;

  @property({type: String, attribute: true})
  tgt: string = 'http://localhost:5984/mood-db'

  service: MoodController;
  constructor() {
    super();

    this.service = new MoodController(this);
    this.service.sync(this.tgt)
      .on("change", (change) => {
        console.debug(`change ${this.tgt}`, change);
      })
      .on("error", (err) => {
        console.error("error during sync", err);
      });
  }

  render() {
    return html`
    <main>
      <h1>How Are You?</h1>

      <div id="mood-app">
        <div class="input-divider"></div>

        <mood-input @register-mood=${
      this.service.registerMood.bind(this.service)
    }>
        </mood-input>

        <div class="input-divider"></div>

        <energy-input @register-energy=${
      this.service.registerEnergy.bind(this.service)
    }>
        </energy-input>
      </div>
    </main>
    `;
  }
}
