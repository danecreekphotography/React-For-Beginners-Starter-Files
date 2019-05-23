import React, { Component } from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import Fish from "./Fish";
import sampleFishes from "../sample-fishes";

class App extends Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    console.log("Adding a fish");

    const fishes = { ...this.state.fishes };
    fishes[`fish${Date.now()}`] = fish;
    this.setState({ fishes });
  };

  addToOrder = fishKey => {
    console.log("Adding fish to order");

    const order = { ...this.state.order };
    order[fishKey] = order[fishKey] + 1 || 1;
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
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
