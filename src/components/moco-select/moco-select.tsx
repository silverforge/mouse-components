import { h, Component, State, EventEmitter, Event, Listen, Element, Prop } from "@stencil/core";

@Component({
  tag: 'moco-select',
  styleUrl: 'moco-select.scss',
  shadow: true,
})
export class MocoSelect {
  @Element() element: HTMLElement;
  @State() isOpen: boolean = false;
  @State() selectedItemValue: string | undefined;
  @State() isOnClick: boolean = false;
  /** placeholder text */
  @Prop() placeholder: string;
  /** field label text */
  @Prop() label: string;
  /** style of the button (dark) or not */
  @Prop() dark: boolean;


  @Prop() disabled: boolean = false;

  @Prop() error: boolean = false;

  /** popver opened */
  @Event({
    eventName: 'opened',
    bubbles: false,
    composed: true
  }) opened: EventEmitter<boolean>;
  /** selected value changed */
  @Event({
    eventName: 'selectedValueChanged',
    bubbles: false,
    composed: true,
  }) selectedValueChanged: EventEmitter<string>;

  @Listen('optionSelected')
  optionSelected(event: CustomEvent<string>) {
    this.selectedItemValue = event.detail;
    this.selectedValueChanged.emit(event.detail);
    this._updateSelectedElement();
  }

  connectedCallback() {
    document.addEventListener('click', this._outsideClick.bind(this));
    document.addEventListener('keydown', this._outsideKeypress.bind(this));
    this._setInitialSelectedElement();
  }

  disconnectedCallback() {
    document.removeEventListener('click', this._outsideClick);
    document.removeEventListener('keydown', this._outsideKeypress);
  }

  onClick() {
    this.isOpen = !this.isOpen;
    this.opened.emit(this.isOpen);
    this.isOnClick = true;
  }

  _setInitialSelectedElement() {
    const mocoOptionElements = this.element.querySelectorAll('moco-select-option[selected]');

    if (mocoOptionElements && mocoOptionElements.length > 0) {
      this.selectedItemValue = mocoOptionElements[0].getAttribute('value');
      this._updateSelectedElement();
    } else {
      const selectElementPlaceHolder = document.createElement('span');
      selectElementPlaceHolder.innerText = this.placeholder ? this.placeholder : "Select...";
      selectElementPlaceHolder.setAttribute('slot', 'selected-value');
      this.element.appendChild(selectElementPlaceHolder);
    }
  }

  _outsideClick() {
    if (this.isOpen && !this.isOnClick) {
      this.isOpen = false;
      this.opened.emit(this.isOpen);
    } else {
      this.isOnClick = false;
    }
  }

  _outsideKeypress(e: KeyboardEvent) {
    if (e.key === 'Escape' || e.code === 'Escape') {
      this._outsideClick();
    }
  }

  _updateSelectedElement() {
    let clonedElement: HTMLMocoSelectOptionElement;
    const mocoOptionElements = this.element.querySelectorAll('moco-select-option');
    if (mocoOptionElements) {
      mocoOptionElements.forEach(mso => {
        const valueAttr = mso.getAttribute('value');
        if (valueAttr === this.selectedItemValue) {
          mso.setAttribute('selected', 'true');
          clonedElement = this._cloneOptionElement(mso);
        } else {
          mso.removeAttribute('selected');
        }
      });
    }

    this._swapSelectedElement(clonedElement);
    (this.element.shadowRoot.querySelector('.container') as HTMLDivElement)?.focus();
  }

  _cloneOptionElement(mocoOptionElement: HTMLMocoSelectOptionElement) {
    let clonedElement = mocoOptionElement.cloneNode(true) as HTMLMocoSelectOptionElement;
    clonedElement.setAttribute('slot', 'selected-value');
    clonedElement.setAttribute('no-click', 'true');
    clonedElement.removeAttribute('selected');
    return clonedElement;
  }

  _swapSelectedElement(newElement: HTMLMocoSelectOptionElement) {
    const addedMocoOptionElements = this.element.querySelectorAll('*[slot="selected-value"]');
    addedMocoOptionElements.forEach(amso => {
      this.element.removeChild(amso);
    });
    this.element.appendChild(newElement);
  }

  render() {
    let containerClass = (this.label) ? "container-label" : "container";
    let controlClass = "control";
    let carouselClass = (this.isOpen) ? "carousel-icons-up" : "carousel-icons-down";
    let popoverClass = (this.isOpen) ? "popover-open" : "popover";

    if (this.dark) {
      containerClass += "-dark";
      controlClass += "-dark";
      carouselClass += "-dark";
      popoverClass += "-dark";
    }

    return (
      <div class={containerClass} tabindex={0} data-label-text={this.label}>
        <div class={controlClass} onClick={this.onClick.bind(this)}>
          <slot name="decal"></slot>
          <div class="selected-element">
            <slot name="selected-value"></slot>
          </div>
          <div class={carouselClass}>
            <div class="icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24">
                <path d="M7,15L12,10L17,15H7Z" />
              </svg>
            </div>
            <div class="icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24">
                <path d="M7,10L12,15L17,10H7Z" />
              </svg>
            </div>
          </div>
          <div class="control-clickbox"></div>
        </div>

        <div class={popoverClass}>
          <slot></slot>
        </div>
      </div>
    );
  }
}
