import { h, Component, Element, Prop, Watch } from "@stencil/core";

@Component({
  tag: "moco-progress",
  styleUrl: "moco-progress.scss",
  shadow: true
})
export class MocoProgress {
  private leftElement: HTMLDivElement;
  private rightElement: HTMLDivElement;

  @Element() element: HTMLElement;
  @Prop() value: number;

  @Watch("value")
  watchValueHandler(newValue: number, oldValue: number) {
    console.log(this.leftElement);
    console.log(this.rightElement);

    if (newValue > 50) {
      this.leftElement.style.transform = "rotateZ(180deg)";
  
      const vv = newValue - 50;
      const newDegree = vv * ( 180 / 50 );
      this.rightElement.style.opacity = "1";
      this.rightElement.style.transform = `rotateZ(${newDegree}deg)`;
    } else {
      const newDegree = newValue * ( 180 / 50 );
      this.leftElement.style.transform = `rotateZ(${newDegree}deg)`;
    }

    //this.leftElement.style.transform = 
  }

  render() {
    return (
      <div>
        <div class="circle">
          <div class="left" ref={el => this.leftElement = el as HTMLDivElement}></div>
          <div class="right" ref={el => this.rightElement = el as HTMLDivElement}></div>

          <div class="left-panel"></div>
          <div class="center-shield"></div>
        </div>
      </div>
    );
  }
}

