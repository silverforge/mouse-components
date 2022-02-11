import { h, Component, Prop, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: 'moco-button',
  styleUrl: 'moco-button.scss',
  shadow: true
})
export class MocoButton {
  /** button text */
  @Prop() caption: string;
  /** style of the button (dark) or not */
  @Prop() dark: boolean;
  /** button disabled or not  */
  @Prop() disabled: boolean;

  /** 
   * event emitted on every button click,
   * emitting the caption text of the button
   * */
  @Event({
    eventName: 'clicked',
    bubbles: false,
    composed: true
  }) clicked: EventEmitter<string>;

  onClick() {
    this.clicked.emit(this.caption);
  }

  render() {
    let buttonClass = 'moco-button';
    if (this.dark) {
      buttonClass = 'moco-button-dark';
    }

    return (
      <button 
          class={buttonClass} 
          type="button" 
          disabled={this.disabled}
          onClick={this.onClick.bind(this)}>
            {this.caption}
      </button>
    );
  }
}
