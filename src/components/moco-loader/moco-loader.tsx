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
          <div class="dot01"></div>
          <div class="dot02"></div>
          <div class="dot03"></div>
          <div class="dot04"></div>
          <div class="dot05"></div>
          <div class="dot06"></div>
          <div class="dot07"></div>
          <div class="dot08"></div>
          <div class="dot09"></div>
          <div class="dot10"></div>
          <div class="dot11"></div>
          <div class="dot12"></div>
        </div>

        <div class="container-inner-inner">
          <div class="dot-small"></div>
        </div>
      </div>
    );
  }
}