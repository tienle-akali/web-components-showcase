import { Component, Prop, State, h } from "@stencil/core";

@Component({
  tag: "stencil-card",
  styleUrl: "stencil-card.css",
  shadow: true,
})
export class UserCard {
  @Prop() name: string = "Your name";
  @Prop() email: string = "youremail@example.com";
  @State() count: number = 0;

  render() {
    return (
      <div class="card">
        <h3>{this.name}</h3>
        <p>{this.email}</p>
        <button onClick={() => this.count++}>Đã thích: {this.count}</button>
      </div>
    );
  }
}
