import { h, Component, Prop, EventEmitter, Event } from "@stencil/core";

@Component({
  tag: 'moco-input-number',
  styleUrl: '../moco-input.scss',
  shadow: true
})
export class MocoInputNumber {
  numericInput!: HTMLInputElement;

  @Prop() placeholder: string;
  @Prop() dark: boolean;
  @Prop() disabled: boolean = false;
  @Prop({ reflect: true, mutable: true }) error: boolean;
  @Prop({ reflect: true, mutable: true }) value: string;

  @Event({
    eventName: 'changed',
    composed: true,
    bubbles: false
  }) inputchanged: EventEmitter<string>;

  onInputChange(e: any) {
    this.value = e.target.value;
    this.inputchanged.emit(e.target.value);
  }

  _stepUp() {
    if (!this.disabled) {
      this.numericInput.stepUp();
    }
  }

  _stepDown() {
    if (!this.disabled) {
      this.numericInput.stepDown();
    }
  }

  render() {
    return (
      <div class="moco-input-box">
        <slot name="decal"></slot>
        <input
          ref={(el) => this.numericInput = el}
          type="number"
          disabled={this.disabled}
          placeholder={this.placeholder}
          value={this.value}
          onInput={this.onInputChange.bind(this)} />
        <div class="input-end-box">
          <svg onClick={this._stepUp.bind(this)} tabindex={0} xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24">
            <path d="M7,15L12,10L17,15H7Z" />
          </svg>
          <svg onClick={this._stepDown.bind(this)} tabindex={0} xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24">
            <path d="M7,10L12,15L17,10H7Z" />
          </svg>
        </div>
      </div>
    );
  }
}
