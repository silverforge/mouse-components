import { h, Component, Prop, EventEmitter, Event } from "@stencil/core";

@Component({
  tag: 'moco-input-text',
  styleUrl: 'moco-input.scss',
  shadow: true
})
export class MocoInputText {
  /** placeholder text */
  @Prop() placeholder: string;
  /** style of the button (dark) or not */
  @Prop() dark: boolean;
  /** disabled */
  @Prop() disabled: boolean = false;
  /** is error or not */
  @Prop({ reflect: true, mutable: true }) error: boolean;
  /** 
   * value of the input field, 
   * updated on input change */
  @Prop({ reflect: true, mutable: true }) value: string;

  /** emits the value of input plus updates the value of the component */
  @Event({
    eventName: 'inputchange',
    composed: true,
    bubbles: false
  }) inputchange: EventEmitter<string>;

  onInputChange(e: any) {
    this.value = e.target.value;
    this.inputchange.emit(e.target.value);
  }

  render() {
    return (
      <div class="moco-input-box">
        <slot name="decal"></slot>
        <input 
            type="text" 
            disabled={this.disabled}
            placeholder={this.placeholder} 
            value={this.value} 
            onInput={this.onInputChange.bind(this)} />
      </div>
    );
  }
}
