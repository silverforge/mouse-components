import { h, Component, State, EventEmitter, Event, Listen } from "@stencil/core";

const menuUp = (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24">
    <path d="M7,15L12,10L17,15H7Z" />
  </svg>
);

const menuDown = (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24">
    <path d="M7,10L12,15L17,10H7Z" />
  </svg>
);

@Component({
  tag: 'moco-select',
  styleUrl: 'moco-select.scss',
  shadow: true,
})
export class MocoSelect {
  @State() isOpen: boolean = false;

  @Event({
    eventName: 'opened',
    bubbles: false,
    composed: true
  }) opened: EventEmitter<boolean>;

  @Listen('mocoOptionSelected')
  optionSelected(event: CustomEvent<string>) {
    console.log(event.detail);
  }

  connectedCallback() {
    console.log("connected");
    document.addEventListener('click', this._outsideClick.bind(this));
  }

  disconnectedCallback() {
    console.log("disconnected");
    document.removeEventListener('click', this._outsideClick);
  }

  onClick(e: Event) {
    this.isOpen = !this.isOpen;
    e.stopPropagation();
    this.opened.emit(this.isOpen);
  }

  _outsideClick() {
    if (this.isOpen) {
      this.isOpen = false;
      this.opened.emit(this.isOpen);
    }
  }

  render() {
    const carouselClass = (this.isOpen) ? "carousel-icons-up" : "carousel-icons-down";
    const popoveClass = (this.isOpen) ? "popover-open" : "popover";

    return (
      <div class="container" tabindex={0} onClick={this.onClick.bind(this)}>
        <div class="control">
          <span>Select an item...</span>
          <div class={carouselClass}>
            <div class="icon-box">
              {menuUp}
            </div>
            <div class="icon-box">
              {menuDown}
            </div>
          </div>
        </div>

        <div class={popoveClass}>
          <slot></slot>
        </div>
      </div>
    );
  }
}
