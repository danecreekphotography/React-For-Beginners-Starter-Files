import React from "react";
import PropTypes from "prop-types";

class EditFishForm extends React.Component {
  static propTypes = {
    fishId: PropTypes.string.isRequired,
    updateFish: PropTypes.func.isRequired
  };

  handleChange = event => {
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };

    this.props.updateFish(this.props.fishId, updatedFish);
  };

  render() {
    const { fish } = this.props;

    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={fish.name}
        />
        <input
          type="text"
          name="price"
          onChange={this.handleChange}
          value={fish.price}
        />
        <select name="status" onChange={this.handleChange} value={fish.status}>
          <option onChange={this.handleChange} value="available">
            Fresh!
          </option>
          <option onChange={this.handleChange} value="unavailable">
            Sold Out!
          </option>
        </select>
        <textarea name="desc" onChange={this.handleChange} value={fish.desc} />
        <input
          type="text"
          name="image"
          onChange={this.handleChange}
          value={fish.image}
        />
        <button onClick={() => this.props.deleteFish(this.props.fishId)}>
          Remove Fish
        </button>
      </div>
    );
  }
}

export default EditFishForm;
