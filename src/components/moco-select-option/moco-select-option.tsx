import { h, Component, Prop, EventEmitter, Event, Listen } from "@stencil/core";

@Component({
  tag: 'moco-select-option',
  styleUrl: 'moco-select-option.scss',
  shadow: true
})
export class MocoSelectOption {
  @Prop() value: string;

  @Prop({ reflect: true, mutable: true }) selected: boolean = false;

  @Event({
    eventName: 'mocoOptionSelected',
    bubbles: true,
    composed: true
  }) clicked: EventEmitter<string>;


  @Listen('mocoSelectSelectedValueChanged', { capture: true, passive: true })
  selectedValueChanged(e) {
    console.log('listener', this.value, e.detail);
  }

  onClick() {
    this.clicked.emit(this.value);
    this.selected = true;
  }

  render() {
    const optionClass = (this.selected) ? "option-selected" : "option";

    return (
      <div class={optionClass} onClick={this.onClick.bind(this)}>
        <slot></slot>
      </div>
    );
  }
}
