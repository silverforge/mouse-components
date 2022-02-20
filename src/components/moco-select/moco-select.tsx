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
    eventName: 'selectedValueChanged',
    bubbles: false,
    composed: false,
  }) selectedValueChanged: EventEmitter<string>;

  @Listen('mocoOptionSelected')
  optionSelected(event: CustomEvent<string>) {
    this.selectedItemValue = event.detail;
    this.selectedValueChanged.emit(event.detail);

    let clonedElement: any;
    const mocoOptionElements = this.element.querySelectorAll('moco-select-option');
    if (mocoOptionElements) {
      mocoOptionElements.forEach(mso => {
        const valueAttr = mso.getAttribute('value');
        if (valueAttr === this.selectedItemValue) {
          clonedElement = mso.cloneNode(true);
          clonedElement.setAttribute('slot', 'selected-value');
          clonedElement.setAttribute('no-click', 'true');
          mso.setAttribute('selected', 'true');
        } else {
          mso.removeAttribute('selected');
        }
      });
    }

    const addedMocoOptionElements = this.element.querySelectorAll('*[slot="selected-value"]');
    addedMocoOptionElements.forEach(amso => {
      this.element.removeChild(amso);
    });

    if (clonedElement) {
      this.element.appendChild(clonedElement);
    }
  }

  connectedCallback() {
    document.addEventListener('click', this._outsideClick.bind(this));
    const selectElementPlaceHolder = document.createElement('span');
    selectElementPlaceHolder.innerText = "Select an item...";
    selectElementPlaceHolder.setAttribute('slot', 'selected-value');
    this.element.appendChild(selectElementPlaceHolder);
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
          <div class="selected-element">
            <slot name="selected-value"></slot>
          </div>
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
