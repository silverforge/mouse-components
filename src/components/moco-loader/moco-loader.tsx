import { h, Component, Prop } from "@stencil/core";

@Component({
  tag: 'moco-loader',
  styleUrls: {
    default: './styles/moco-loader-large.scss',
    small: './styles/moco-loader-small.scss',
    medium: './styles/moco-loader-medium.scss',
    large: './styles/moco-loader-large.scss',
    huge: './styles/moco-loader-huge.scss',
  },
  shadow: true
})
export class MocoLoader {
  /** style of the button (dark) or not */
  @Prop() dark: boolean;

  render() {
    let containerClass = 'container';
    let containerInnerClass = 'container-inner';
    let containerInnerSmallClass = 'container-inner-small';
    let dotSmallClass = 'dot-small';
    if (this.dark) {
      containerClass = 'container-dark';
      containerInnerClass = 'container-inner-dark';
      containerInnerSmallClass = 'container-inner-small-dark';
      dotSmallClass = 'dot-small-dark';
    }

    return (
      <div class={containerClass}>
        <div class={containerInnerClass}>
          <div /><div /><div /><div />
          <div /><div /><div /><div />
          <div /><div /><div /><div />
        </div>

        <div class={containerInnerSmallClass}>
          <div class={dotSmallClass}></div>
        </div>
      </div>
    );
  }
}
