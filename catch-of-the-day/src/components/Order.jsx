import React, { Component } from "react";
import { formatPrice } from "../helpers";

class Order extends Component {
  renderOrderLine = key => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === "available";

    if (!fish) {
      return null;
    }

    if (isAvailable) {
      return (
        <li key={key}>
          {count} lbs {fish.name} {formatPrice(count * fish.price)}
        </li>
      );
    } else {
      return (
        <li key={key}>
          Sorry {fish ? fish.name : "fish"} is no longer available
        </li>
      );
    }
  };

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((previousTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === "available";

      if (isAvailable) {
        return previousTotal + fish.price * count;
      } else {
        return previousTotal;
      }
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">{orderIds.map(this.renderOrderLine)}</ul>
        <div className="total">
          <strong>{formatPrice(total)}</strong>
        </div>
        <ul>
          <li />
        </ul>
      </div>
    );
  }
}

export default Order;
