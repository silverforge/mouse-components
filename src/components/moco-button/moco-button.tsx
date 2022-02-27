import { h, Component, Prop, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: 'moco-button',
  styleUrl: 'moco-button.scss',
  shadow: true
})
export class MocoButton {
  @Prop() value: string = "moco-button";
  @Prop() dark: boolean;
  @Prop() disabled: boolean;

  @Event({
    eventName: 'clicked',
    bubbles: false,
    composed: true
  }) clicked: EventEmitter<string>;

  onClick() {
    this.clicked.emit(this.value);
  }

  render() {
    return (
      <button 
          class="moco-button" 
          type="button" 
          disabled={this.disabled}
          onClick={this.onClick.bind(this)}>
            <slot name="decal"></slot>
            <slot></slot>
      </button>
    );
  }
}
