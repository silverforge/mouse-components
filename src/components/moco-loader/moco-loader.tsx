import { h, Component } from "@stencil/core";

@Component({
  tag: 'moco-loader',
  styleUrl: 'moco-loader.scss',
  shadow: true
})
export class MocoLoader {

  render() {
    return (
      <div class="container">
        <div class="container-inner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div class="container-inner-small">
          <div class="dot-small"></div>
        </div>
      </div>
    );
  }
}