import { h, Component, Prop, EventEmitter, Event } from "@stencil/core";

@Component({
  tag: 'moco-input-text',
  styleUrl: 'moco-input.scss',
  shadow: true
})
export class MocoInputText {
  @Prop() placeholder: string;
  @Prop() dark: boolean;
  @Prop() disabled: boolean = false;
  @Prop({ reflect: true, mutable: true }) error: boolean;
  @Prop({ reflect: true, mutable: true }) value: string;

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
