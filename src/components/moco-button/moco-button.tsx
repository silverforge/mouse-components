import { h, Component, Prop, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: 'moco-button',
  styleUrl: 'moco-button.scss',
  shadow: true
})
export class MocoButton {
  /** value */
  @Prop() value: string = "moco-button";
  /** dark style */
  @Prop() dark: boolean;
  /** disabled  */
  @Prop() disabled: boolean;

  /** 
   * event emitted on every button click,
   * emitting the value of the button
   * */
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
