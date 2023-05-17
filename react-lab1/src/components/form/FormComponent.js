import { Component } from "react";
import "./formStyle.css";

class FormComponent extends Component {
  getData = (e) => {
    this.setState({ input: e.target.value });
  };

  resetInput = (e) => {
    this.setState({ input: "" });
  }

  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  render() {
    return (
      <>
        <div class="center">
          <h1>Task One </h1>
          <input
            type="text"
            value={this.state.input}
            onChange={this.getData}
            placeholder="Enter Your Data"
          />

          <h2>Your Input :</h2>

          <h1>{this.state.input}</h1>

          <input id='resetBtn' type="button" value="Reset" onClick={this.resetInput} />
        </div>
      </>
    );
  }
}

export default FormComponent;
