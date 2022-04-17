import { h, Component, Element, Prop, Watch } from "@stencil/core";

@Component({
  tag: "moco-progress",
  styleUrls: {
    default: './styles/moco-progress-large.scss',
    tiny: './styles/moco-progress-tiny.scss',
    small: './styles/moco-progress-small.scss',
    medium: './styles/moco-progress-medium.scss',
    large: './styles/moco-progress-large.scss',
    huge: './styles/moco-progress-huge.scss',
  },
  shadow: true
})
export class MocoProgress {
  private leftElement: HTMLDivElement;
  private rightElement: HTMLDivElement;

  @Element() element: HTMLElement;
  @Prop() percentage: number;
  @Prop() text: string;
  @Prop() dark: boolean;

  setPercentage(value: number) {
    if (value > 100) {
      this.leftElement.style.transform = "rotateZ(180deg)";
      this.rightElement.style.transform = "rotateZ(180deg)";
    } else if (value > 50) {
      this.leftElement.style.transform = "rotateZ(180deg)";

      const vv = value - 50;
      const newDegree = vv * (180 / 50);
      this.rightElement.style.opacity = "1";
      this.rightElement.style.transform = `rotateZ(${newDegree}deg)`;
    } else {
      const newDegree = value * (180 / 50);
      this.leftElement.style.transform = `rotateZ(${newDegree}deg)`;
    }

  }

  @Watch("percentage")
  watchValueHandler(newValue: number) {
    this.setPercentage(newValue);
  }

  componentDidLoad() {
    this.setPercentage(this.percentage);
  }

  render() {
    return (
      <div class="circle">
        <div class="left" ref={el => this.leftElement = el as HTMLDivElement}></div>
        <div class="right" ref={el => this.rightElement = el as HTMLDivElement}></div>

        <div class="left-panel"></div>
        <div class="center-shield">
          <slot></slot>
        </div>

        <div class="dot-container">
          <div /><div /><div /><div />
          <div /><div /><div /><div />
          <div /><div /><div /><div />
        </div>
      </div>
    );
  }
}

