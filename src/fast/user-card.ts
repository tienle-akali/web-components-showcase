import {
  FASTElement,
  customElement,
  html,
  css,
  attr,
} from "@microsoft/fast-element";

const template = html`
  <div class="card">
    <h3>${(x) => x.name}</h3>
    <p>${(x) => x.email}</p>
    <button @click="${(x) => x.count++}">Đã thích: ${(x) => x.count}</button>
  </div>
`;

const styles = css`
  .card {
    font-family:
      -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    background: #ffffff;
    border: 1px solid #eaeaea;
    border-radius: 12px;
    padding: 20px;
    width: 260px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }
  h3 {
    margin: 0 0 8px 0;
    color: #1a1a1a;
    font-size: 18px;
  }
  p {
    margin: 0 0 16px 0;
    color: #666;
    font-size: 14px;
  }
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
  button:hover {
    background: #0051a2;
  }
`;

@customElement({
  name: "fast-card",
  template,
  styles,
})
export class UserCard extends FASTElement {
  @attr name = "Your name";
  @attr email = "youremail@example.com";
  @attr count = 0;
}
