/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MocoButton {
        "dark": boolean;
        "disabled": boolean;
        "value": string;
    }
    interface MocoCheckbox {
        "checked": boolean;
        "dark": boolean;
    }
    interface MocoInputText {
        "dark": boolean;
        "disabled": boolean;
        "error": boolean;
        "placeholder": string;
        "value": string;
    }
    interface MocoLoader {
        "dark": boolean;
        "transparent": boolean;
    }
    interface MocoSelect {
        "dark": boolean;
        "disabled": boolean;
        "error": boolean;
        "placeholder": string;
    }
    interface MocoSelectOption {
        "dark": boolean;
        "noClick": boolean;
        "selected": boolean;
        "value": string;
    }
    interface MocoSwitch {
        "checked": boolean;
        "dark": boolean;
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
    interface HTMLMocoCheckboxElement extends Components.MocoCheckbox, HTMLStencilElement {
    }
    var HTMLMocoCheckboxElement: {
        prototype: HTMLMocoCheckboxElement;
        new (): HTMLMocoCheckboxElement;
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
        "moco-checkbox": HTMLMocoCheckboxElement;
        "moco-input-text": HTMLMocoInputTextElement;
        "moco-loader": HTMLMocoLoaderElement;
        "moco-select": HTMLMocoSelectElement;
        "moco-select-option": HTMLMocoSelectOptionElement;
        "moco-switch": HTMLMocoSwitchElement;
    }
}
declare namespace LocalJSX {
    interface MocoButton {
        "dark"?: boolean;
        "disabled"?: boolean;
        "onClicked"?: (event: CustomEvent<string>) => void;
        "value"?: string;
    }
    interface MocoCheckbox {
        "checked"?: boolean;
        "dark"?: boolean;
        "onChanged"?: (event: CustomEvent<boolean>) => void;
    }
    interface MocoInputText {
        "dark"?: boolean;
        "disabled"?: boolean;
        "error"?: boolean;
        "onChanged"?: (event: CustomEvent<string>) => void;
        "placeholder"?: string;
        "value"?: string;
    }
    interface MocoLoader {
        "dark"?: boolean;
        "transparent"?: boolean;
    }
    interface MocoSelect {
        "dark"?: boolean;
        "disabled"?: boolean;
        "error"?: boolean;
        "onChanged"?: (event: CustomEvent<string>) => void;
        "onOpened"?: (event: CustomEvent<boolean>) => void;
        "placeholder"?: string;
    }
    interface MocoSelectOption {
        "dark"?: boolean;
        "noClick"?: boolean;
        "onSelected"?: (event: CustomEvent<string>) => void;
        "selected"?: boolean;
        "value"?: string;
    }
    interface MocoSwitch {
        "checked"?: boolean;
        "dark"?: boolean;
        "disabled"?: boolean;
        "onSwitched"?: (event: CustomEvent<boolean>) => void;
    }
    interface IntrinsicElements {
        "moco-button": MocoButton;
        "moco-checkbox": MocoCheckbox;
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
            "moco-checkbox": LocalJSX.MocoCheckbox & JSXBase.HTMLAttributes<HTMLMocoCheckboxElement>;
            "moco-input-text": LocalJSX.MocoInputText & JSXBase.HTMLAttributes<HTMLMocoInputTextElement>;
            "moco-loader": LocalJSX.MocoLoader & JSXBase.HTMLAttributes<HTMLMocoLoaderElement>;
            "moco-select": LocalJSX.MocoSelect & JSXBase.HTMLAttributes<HTMLMocoSelectElement>;
            "moco-select-option": LocalJSX.MocoSelectOption & JSXBase.HTMLAttributes<HTMLMocoSelectOptionElement>;
            "moco-switch": LocalJSX.MocoSwitch & JSXBase.HTMLAttributes<HTMLMocoSwitchElement>;
        }
    }
}
