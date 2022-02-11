import { h, Component, Prop, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: 'moco-button',
  styleUrl: 'moco-button.scss',
  shadow: true
})
export class MocoButton {
  @Prop() caption: string;
  @Prop() dark: boolean;
  @Prop() disabled: boolean;

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
