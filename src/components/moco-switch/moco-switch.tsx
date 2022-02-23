import { h, Component, Prop, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: 'moco-switch',
  styleUrl: 'moco-switch.scss',
  shadow: true
})
export class MocoSwitch {
  /** switch disabled or not  */
  @Prop() disabled: boolean;
  /** style of the button (dark) or not */
  @Prop() dark: boolean;
  /** checked or not */
  @Prop({ reflect: true, mutable: true }) checked: boolean;
  /** emits the state of switch (checked: true or false) */
  @Event({
    eventName: 'switched',
    bubbles: false,
    composed: true
  }) switched: EventEmitter<boolean>;

  onContainerClick() {
    if (!this.disabled) {
      this.checked = !this.checked;
      this.switched.emit(this.checked);
    }
  }

  render() {
    const knobClass = (this.checked) ? 'knob-set' : 'knob';

    return (
      <div
        class="container"
        tabIndex={(this.disabled) ? -1 : 0}
        onClick={this.onContainerClick.bind(this)}>
        <div class={knobClass}></div>
      </div>
    );
  }
}
