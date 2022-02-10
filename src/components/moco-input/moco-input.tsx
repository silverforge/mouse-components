import { h, Component, Prop } from "@stencil/core";

@Component({
  tag: 'moco-input-text',
  styleUrl: 'moco-input.scss',
  shadow: true
})
export class MocoInputText {
  @Prop() placeholder: string;
  @Prop() label: string;
  @Prop() dark: boolean;
  @Prop({ reflect: true, mutable: true }) error: boolean;

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
      <div class={inputClass} data-label-text={this.label} data-dark={this.dark ? "true" : "false"}>
        <input type="text" placeholder={this.placeholder} />
      </div>
    );
  }
}
