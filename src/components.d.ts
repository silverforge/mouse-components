/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MocoButton {
        /**
          * button text
         */
        "caption": string;
        /**
          * style of the button (dark) or not
         */
        "dark": boolean;
        /**
          * button disabled or not
         */
        "disabled": boolean;
    }
    interface MocoInputText {
        /**
          * style of the button (dark) or not
         */
        "dark": boolean;
        /**
          * is error or not
         */
        "error": boolean;
        /**
          * field label text
         */
        "label": string;
        /**
          * placeholder text
         */
        "placeholder": string;
        /**
          * value of the input field,  updated on input change
         */
        "value": string;
    }
    interface MocoLoader {
        /**
          * style of the button (dark) or not
         */
        "dark": boolean;
        /**
          * transparent background
         */
        "transparent": boolean;
    }
    interface MocoSelect {
    }
    interface MocoSelectOption {
        "noClick": boolean;
        "selected": boolean;
        "value": string;
    }
    interface MocoSwitch {
        /**
          * checked or not
         */
        "checked": boolean;
        /**
          * style of the button (dark) or not
         */
        "dark": boolean;
        /**
          * switch disabled or not
         */
        "disabled": boolean;
    }
}
declare global {
    interface HTMLMocoButtonElement extends Components.MocoButton, HTMLStencilElement {
    }
    var HTMLMocoButtonElement: {
        prototype: HTMLMocoButtonElement;
        new (): HTMLMocoButtonElement;
    };
    interface HTMLMocoInputTextElement extends Components.MocoInputText, HTMLStencilElement {
    }
    var HTMLMocoInputTextElement: {
        prototype: HTMLMocoInputTextElement;
        new (): HTMLMocoInputTextElement;
    };
    interface HTMLMocoLoaderElement extends Components.MocoLoader, HTMLStencilElement {
    }
    var HTMLMocoLoaderElement: {
        prototype: HTMLMocoLoaderElement;
        new (): HTMLMocoLoaderElement;
    };
    interface HTMLMocoSelectElement extends Components.MocoSelect, HTMLStencilElement {
    }
    var HTMLMocoSelectElement: {
        prototype: HTMLMocoSelectElement;
        new (): HTMLMocoSelectElement;
    };
    interface HTMLMocoSelectOptionElement extends Components.MocoSelectOption, HTMLStencilElement {
    }
    var HTMLMocoSelectOptionElement: {
        prototype: HTMLMocoSelectOptionElement;
        new (): HTMLMocoSelectOptionElement;
    };
    interface HTMLMocoSwitchElement extends Components.MocoSwitch, HTMLStencilElement {
    }
    var HTMLMocoSwitchElement: {
        prototype: HTMLMocoSwitchElement;
        new (): HTMLMocoSwitchElement;
    };
    interface HTMLElementTagNameMap {
        "moco-button": HTMLMocoButtonElement;
        "moco-input-text": HTMLMocoInputTextElement;
        "moco-loader": HTMLMocoLoaderElement;
        "moco-select": HTMLMocoSelectElement;
        "moco-select-option": HTMLMocoSelectOptionElement;
        "moco-switch": HTMLMocoSwitchElement;
    }
}
declare namespace LocalJSX {
    interface MocoButton {
        /**
          * button text
         */
        "caption"?: string;
        /**
          * style of the button (dark) or not
         */
        "dark"?: boolean;
        /**
          * button disabled or not
         */
        "disabled"?: boolean;
        /**
          * event emitted on every button click, emitting the caption text of the button
         */
        "onClicked"?: (event: CustomEvent<string>) => void;
    }
    interface MocoInputText {
        /**
          * style of the button (dark) or not
         */
        "dark"?: boolean;
        /**
          * is error or not
         */
        "error"?: boolean;
        /**
          * field label text
         */
        "label"?: string;
        /**
          * emits the value of input plus updates the value of the component
         */
        "onInputchange"?: (event: CustomEvent<string>) => void;
        /**
          * placeholder text
         */
        "placeholder"?: string;
        /**
          * value of the input field,  updated on input change
         */
        "value"?: string;
    }
    interface MocoLoader {
        /**
          * style of the button (dark) or not
         */
        "dark"?: boolean;
        /**
          * transparent background
         */
        "transparent"?: boolean;
    }
    interface MocoSelect {
        "onOpened"?: (event: CustomEvent<boolean>) => void;
        "onSelectedValueChanged"?: (event: CustomEvent<string>) => void;
    }
    interface MocoSelectOption {
        "noClick"?: boolean;
        "onMocoOptionSelected"?: (event: CustomEvent<string>) => void;
        "selected"?: boolean;
        "value"?: string;
    }
    interface MocoSwitch {
        /**
          * checked or not
         */
        "checked"?: boolean;
        /**
          * style of the button (dark) or not
         */
        "dark"?: boolean;
        /**
          * switch disabled or not
         */
        "disabled"?: boolean;
        /**
          * emits the state of switch (checked: true or false)
         */
        "onSwitched"?: (event: CustomEvent<boolean>) => void;
    }
    interface IntrinsicElements {
        "moco-button": MocoButton;
        "moco-input-text": MocoInputText;
        "moco-loader": MocoLoader;
        "moco-select": MocoSelect;
        "moco-select-option": MocoSelectOption;
        "moco-switch": MocoSwitch;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "moco-button": LocalJSX.MocoButton & JSXBase.HTMLAttributes<HTMLMocoButtonElement>;
            "moco-input-text": LocalJSX.MocoInputText & JSXBase.HTMLAttributes<HTMLMocoInputTextElement>;
            "moco-loader": LocalJSX.MocoLoader & JSXBase.HTMLAttributes<HTMLMocoLoaderElement>;
            "moco-select": LocalJSX.MocoSelect & JSXBase.HTMLAttributes<HTMLMocoSelectElement>;
            "moco-select-option": LocalJSX.MocoSelectOption & JSXBase.HTMLAttributes<HTMLMocoSelectOptionElement>;
            "moco-switch": LocalJSX.MocoSwitch & JSXBase.HTMLAttributes<HTMLMocoSwitchElement>;
        }
    }
}
