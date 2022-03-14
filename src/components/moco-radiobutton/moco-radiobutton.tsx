import { h, Component, Prop, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: 'moco-radiobutton',
  styleUrl: 'moco-radiobutton.scss',
  shadow: true
})
export class MocoRadiobutton {
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
    return (
      <div class="moco-radiobutton-box" tabIndex={(this.disabled) ? -1 :0 } onClick={this.onClick.bind(this)}>
        {(this.checked)
          ? (
            <div class="moco-radiobutton-box-circle"></div>
          )
          : null
        }
      </div>
    );
  }
}
