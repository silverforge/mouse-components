import { h, Component, State, EventEmitter, Event, Listen, Element } from "@stencil/core";

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
  @Element() element: HTMLElement;
  @State() isOpen: boolean = false;
  @State() selectedItemValue: string | undefined;

  @Event({
    eventName: 'opened',
    bubbles: false,
    composed: true
  }) opened: EventEmitter<boolean>;

  @Event({
    eventName: 'mocoSelectSelectedValueChanged',
    bubbles: false,
    composed: false,
  }) selectedValueChanged: EventEmitter<string>;

  @Listen('mocoOptionSelected')
  optionSelected(event: CustomEvent<string>) {
    this.selectedItemValue = event.detail;
    this.selectedValueChanged.emit(event.detail);

    const mocooptions = this.element.querySelectorAll('moco-select-option');
    if (mocooptions) {
      mocooptions.forEach(mso => {
        const valueAttr = mso.getAttribute('value');
        if (valueAttr === this.selectedItemValue) {
          mso.setAttribute('selected', 'true');
        } else {
          mso.removeAttribute('selected');
        }
      });
    }
  }

  connectedCallback() {
    document.addEventListener('click', this._outsideClick.bind(this));
  }

  disconnectedCallback() {
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
    const popoverClass = (this.isOpen) ? "popover-open" : "popover";

    return (
      <div class="container" tabindex={0} onClick={this.onClick.bind(this)}>
        <div class="control">
          <span>{(this.selectedItemValue) ? this.selectedItemValue : "Select an item..."}</span>
          <div class={carouselClass}>
            <div class="icon-box">
              {menuUp}
            </div>
            <div class="icon-box">
              {menuDown}
            </div>
          </div>
        </div>

        <div class={popoverClass}>
          <slot></slot>
        </div>
      </div>
    );
  }
}
