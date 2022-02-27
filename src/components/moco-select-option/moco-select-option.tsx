import { h, Component, Prop, EventEmitter, Event } from "@stencil/core";

@Component({
  tag: 'moco-select-option',
  styleUrl: 'moco-select-option.scss',
  shadow: true
})
export class MocoSelectOption {
  @Prop() value: string;
  @Prop() noClick: boolean;
  @Prop() dark: boolean;
  @Prop({ reflect: true, mutable: true }) selected: boolean = false;

  @Event({
    eventName: 'optionSelected',
    bubbles: true,
    composed: true,
  }) clicked: EventEmitter<string>;

  onClick() {
    if (this.noClick) return;
    
    this.clicked.emit(this.value);
    this.selected = true;
  }

  render() {
    let optionClass = (this.selected) ? "option-selected" : "option";
    if (this.dark) {
      optionClass += "-dark";
    }

    return (
      <div class={optionClass} onClick={this.onClick.bind(this)}>
        <slot></slot>
      </div>
    );
  }
}
