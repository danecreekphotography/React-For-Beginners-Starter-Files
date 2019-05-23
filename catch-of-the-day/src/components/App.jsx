import React, { Component } from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import Fish from "./Fish";
import sampleFishes from "../sample-fishes";
import base from "../base";

class App extends Component {
  state = {
    fishes: {},
    order: {}
  };

  componentDidMount() {
    const { params } = this.props.match;
    const localStorageRef = localStorage.getItem(`order-${params.storeId}`);

    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }

    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }

  componentDidUpdate() {
    const { params } = this.props.match;

    localStorage.setItem(
      `order-${params.storeId}`,
      JSON.stringify(this.state.order)
    );
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addFish = fish => {
    console.log("Adding a fish");

    const fishes = { ...this.state.fishes };
    fishes[`fish${Date.now()}`] = fish;
    this.setState({ fishes });
  };

  updateFish = (key, updatedFish) => {
    const fishes = { ...this.state.fishes };
    fishes[key] = updatedFish;
    this.setState({ fishes });
  };

  deleteFish = key => {
    const fishes = { ...this.state.fishes };
    fishes[key] = null;
    this.setState({ fishes });
  };

  addToOrder = fishKey => {
    console.log("Adding fish to order");

    const order = { ...this.state.order };
    order[fishKey] = order[fishKey] + 1 || 1;
    this.setState({ order });
  };

  deleteFromOrder = fishKey => {
    console.log("Removing fish from order");
    const order = { ...this.state.order };
    delete order[fishKey];
    this.setState({ order });
  };

  loadSampleFishes = () => {
    console.log("Loading sample fishes");
    this.setState({ fishes: sampleFishes });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          {Object.keys(this.state.fishes).map(key => (
            <Fish
              addToOrder={this.addToOrder}
              key={key}
              fishId={key}
              details={this.state.fishes[key]}
            />
          ))}
        </div>
        <Order
          deleteFromOrder={this.deleteFromOrder}
          fishes={this.state.fishes}
          order={this.state.order}
        />
        <Inventory
          fishes={this.state.fishes}
          addFish={this.addFish}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
