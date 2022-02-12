import { h, Component, State, Prop } from "@stencil/core";

@Component({
  tag: 'moco-switch',
  styleUrl: 'moco-switch.scss',
  shadow: true
})
export class MocoSwitch {
  @State() isChecked: boolean = false;
  /** switch disabled or not  */
  @Prop() disabled: boolean;
  /** checked or not */
  @Prop({ reflect: true, mutable: true }) checked: boolean;

  onContainerClick() {
    if (!this.disabled) {
      this.isChecked = !this.isChecked;
      this.checked = this.isChecked;
    }
  }

  render() {
    let knobClass = (this.isChecked) ? 'knob-set' : 'knob';
    const containerClass = (this.disabled) ? 'container-disabled' : 'container';
    if (this.disabled) {
      knobClass = knobClass + '-disabled';
    }

    return (
      <div
        class={containerClass}
        tabIndex={(this.disabled) ? -1 : 0}
        onClick={this.onContainerClick.bind(this)}>
        <div class={knobClass}></div>
      </div>
    );
  }
}
