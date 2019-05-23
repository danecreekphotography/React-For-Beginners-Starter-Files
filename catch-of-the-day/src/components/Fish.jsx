import React, { Component } from "react";
import { formatPrice } from "../helpers";

class Fish extends Component {
  render() {
    const { image, name, price, desc, status } = this.props.details;
    const isAvailable = status === "available";

    return (
      <ul className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button
          disabled={!isAvailable}
          onClick={() => this.props.addToOrder(this.props.fishId)}
        >
          {isAvailable ? "Add To Cart" : "Sold Out!"}
        </button>
      </ul>
    );
  }
}

export default Fish;
