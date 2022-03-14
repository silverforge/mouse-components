import { h, Component, Prop, EventEmitter, Event, State } from "@stencil/core";

@Component({
  tag: 'moco-input-password',
  styleUrl: '../moco-input.scss',
  shadow: true
})
export class MocoInputPassword {
  passwordInput!: HTMLInputElement;

  @State() isEye: boolean = false;

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

  _showPass() {
    if (!this.disabled) {
      this.isEye = !this.isEye;
      if (this.isEye) {
        this.passwordInput.setAttribute("type", "text");
      } else {
        this.passwordInput.setAttribute("type", "password");
      }
    }
  }

  render() {
    const carouselClass = (this.isEye) ? "carousel-icons-up" : "carousel-icons-down";

    return (
      <div class="moco-input-box">
        <slot name="decal"></slot>
        <input
          ref={(el) => this.passwordInput = el}
          type="password"
          disabled={this.disabled}
          placeholder={this.placeholder}
          value={this.value}
          onInput={this.onInputChange.bind(this)} />
        <div class={carouselClass} tabIndex={0} onClick={this._showPass.bind(this)}>
          <div class="icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" />
            </svg>
          </div>
          <div class="icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24">
              <path d="M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
}
