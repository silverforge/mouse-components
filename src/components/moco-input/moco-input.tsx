import { h, Component, Prop, EventEmitter, Event } from "@stencil/core";

@Component({
  tag: 'moco-input-text',
  styleUrl: 'moco-input.scss',
  shadow: true
})
export class MocoInputText {
  /** placeholder text */
  @Prop() placeholder: string;
  /** field label text */
  @Prop() label: string;
  /** style of the button (dark) or not */
  @Prop() dark: boolean;
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
    let inputClass = "moco-input-box";
    if (this.dark) {
      inputClass = "moco-input-box-dark";
    }
    if (this.label) {
      inputClass = "moco-input-box-label";
      if (this.dark) {
        inputClass = "moco-input-box-label-dark";
      }
    }

    return (
      <div 
          class={inputClass} 
          data-label-text={this.label} 
          data-dark={this.dark ? "true" : "false"}>
        <input 
            type="text" 
            placeholder={this.placeholder} 
            value={this.value} 
            onInput={this.onInputChange.bind(this)} />
      </div>
    );
  }
}
