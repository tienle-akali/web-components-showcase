import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('lit-card')
export class UserCard extends LitElement {
  static styles = css`
    .card {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background: #ffffff;
      border: 1px solid #eaeaea;
      border-radius: 12px;
      padding: 20px;
      width: 260px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    }
    h3 { margin: 0 0 8px 0; color: #1a1a1a; font-size: 18px; }
    p { margin: 0 0 16px 0; color: #666; font-size: 14px; }
    button {
      background: #0070f3;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 500;
      width: 100%;
    }
    button:hover { background: #0051a2; }
  `;

  @property({ type: String }) name = 'Your name';
  @property({ type: String }) email = 'youremail@example.com';
  @property({ type: Number }) count = 0;

  render() {
    return html`
      <div class="card">
        <h3>${this.name}</h3>
        <p>${this.email}</p>
        <button @click="${() => this.count++}">Đã thích: ${this.count}</button>
      </div>
    `;
  }
}