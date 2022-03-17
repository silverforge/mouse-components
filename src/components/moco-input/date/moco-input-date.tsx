import { h, Component, Prop, EventEmitter, Event } from "@stencil/core";

@Component({
  tag: 'moco-input-date',
  styleUrl: '../moco-input.scss',
  shadow: true
})
export class MocoInputDate {
  dateInput!: HTMLInputElement;
  
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

  _onCalendarClick() {
    if (!this.disabled) {
    }
  }

  render() {
    return (
      <div class="moco-input-box">
        <slot name="decal"></slot>
        <input
          ref={(el) => this.dateInput = el}
          type="date"
          disabled={this.disabled}
          value={this.value}
          onInput={this.onInputChange.bind(this)} />
        <div class="input-end-box">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24">
            <path d="M7,12H9V14H7V12M21,6V20A2,2 0 0,1 19,22H5C3.89,22 3,21.1 3,20V6A2,2 0 0,1 5,4H6V2H8V4H16V2H18V4H19A2,2 0 0,1 21,6M5,8H19V6H5V8M19,20V10H5V20H19M15,14V12H17V14H15M11,14V12H13V14H11M7,16H9V18H7V16M15,18V16H17V18H15M11,18V16H13V18H11Z" />
          </svg>
        </div>
      </div>
    );
  }
}
