import { h, Component, Prop, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: 'moco-checkbox',
  styleUrl: 'moco-checkbox.scss',
  shadow: true
})
export class MocoCheckbox {
  @Prop() dark: boolean;
  @Prop() disabled: boolean;
  @Prop({ reflect: true, mutable: true }) checked: boolean;
  @Event({
    eventName: 'changed',
    bubbles: true,
    composed: true
  }) onChange: EventEmitter<boolean>;

  onClick() {
    if (!this.disabled) {
      this.checked = !this.checked;
      this.onChange.emit(this.checked);
    }
  }

  render() {
    const boxClass = ["moco-checkbox-box", (this.checked) ? "extend" : "shrink"].join(" ");

    return (
      <div class={boxClass} tabIndex={(this.disabled) ? -1 : 0} onClick={this.onClick.bind(this)}>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24">
          <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
        </svg>
      </div>
    );
  }
}
