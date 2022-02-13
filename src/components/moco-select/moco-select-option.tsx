import { h, Component, Prop, EventEmitter, Event } from "@stencil/core";

@Component({
  tag: 'moco-select-option',
  styleUrl: 'moco-select-option.scss',
  shadow: true
})
export class MocoSelectOption {
  @Prop() value: string;

  @Event({
    eventName: 'mocoOptionSelected',
    bubbles: true,
    composed: false
  }) clicked: EventEmitter<string>;

  onClick() {
    this.clicked.emit(this.value);
  }

  render() {
    return (
      <div class="option" onClick={this.onClick.bind(this)}>
        <div>
          <slot></slot>
        </div>
      </div>
    );
  }
}
