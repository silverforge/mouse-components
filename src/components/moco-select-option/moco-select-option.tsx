import { h, Component, Prop, EventEmitter, Event } from "@stencil/core";

@Component({
  tag: 'moco-select-option',
  styleUrl: 'moco-select-option.scss',
  shadow: true
})
export class MocoSelectOption {
  /** value */
  @Prop() value: string;
  /** no clicks allowed */
  @Prop() noClick: boolean;
  /** style of the button (dark) or not */
  @Prop() dark: boolean;
  /** is selected */
  @Prop({ reflect: true, mutable: true }) selected: boolean = false;

  /**
   * option selected click
   */
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
