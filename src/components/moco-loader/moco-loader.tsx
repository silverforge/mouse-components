import { h, Component, Prop } from "@stencil/core";

@Component({
  tag: 'moco-loader',
  styleUrls: {
    default: './styles/moco-loader-large.scss',
    tiny: './styles/moco-loader-tiny.scss',
    small: './styles/moco-loader-small.scss',
    medium: './styles/moco-loader-medium.scss',
    large: './styles/moco-loader-large.scss',
    huge: './styles/moco-loader-huge.scss',
  },
  shadow: true
})
export class MocoLoader {
  @Prop() dark: boolean;
  @Prop() transparent: boolean;

  render() {
    const containerClass = (this.transparent) ? 'container-transparent' : 'container';

    return (
      <div class={containerClass}>
        <div class={'container-inner'}>
          <div /><div /><div /><div />
          <div /><div /><div /><div />
          <div /><div /><div /><div />
        </div>

        <div class={'container-inner-small'}>
          <div class={'dot-small'}></div>
        </div>
      </div>
    );
  }
}
