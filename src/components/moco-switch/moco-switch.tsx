import { h, Component, Prop, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: 'moco-switch',
  styleUrl: 'moco-switch.scss',
  shadow: true
})
export class MocoSwitch {
  @Prop() disabled: boolean;
  @Prop() dark: boolean;
  @Prop({ reflect: true, mutable: true }) checked: boolean;
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
