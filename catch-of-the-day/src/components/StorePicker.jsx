import React, { Component } from "react";
import { getFunName } from "../helpers";

class StorePicker extends Component {
  myInput = React.createRef();

  goToStore = event => {
    event.preventDefault();
    this.props.history.push(`/store/${this.myInput.current.value}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
