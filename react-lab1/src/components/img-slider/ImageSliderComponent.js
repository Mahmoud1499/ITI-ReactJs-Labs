import { Component } from "react";
import "./imageSliderStyle.css";

class ImageSliderComponent extends Component {
  imagesArr = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg"];
  i = 0;
  interval = "";

  constructor() {
    super();
    this.state = {
      imageSource: this.imagesArr[0],
    };
  }

  next = () => {
    if (this.i < this.imagesArr.length - 1) {
      this.i++;
    }
  this.setState({ imageSource: this.imagesArr[this.i] });
  };
  previous = () => {
    if (this.i > 0) {
      this.i--;
    }
  this.setState({ imageSource: this.imagesArr[this.i] });
  };
  start = () => {
    this.interval = setInterval(() => {
      this.next();
      if (this.i === this.imagesArr.length - 1) {
        this.i = -1;
      }
    }, 1500);
  };
  stop = () => {
    clearInterval(this.interval);
  };

  render() {
    return (
      <>
        <div class="center">
          <h1>Task Two [Image Slider]</h1>
          <img src={this.state.imageSource} alt="img" />
          <div class="btns">
            <input style={{ marginLeft: "140px" }} type="button" value="Next" onClick={this.next}/>
            <input type="button" value="Prev"  onClick={this.previous} />
            <input type="button" value="Start" onClick={this.start}  />
            <input type="button" value="Stop"  onClick={this.stop} />
          </div>
        </div>
      </>
    );
  }
}

export default ImageSliderComponent;
