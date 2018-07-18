import React, { Component } from "react";
import axios from "axios";

import House from "../House/House";

import { Link } from "react-router-dom";

class DashBoard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    };
  }

  componentDidMount() {
    this.getHouses();
  }

  getHouses = () => {
    axios.get("/api/houses").then(res => {
      this.setState({
        houses: res.data
      });
    });
  };

  deleteHouse = id => {
    console.log("hit");
    axios.delete(`/api/houses/${id}`).then(() => {
      this.getHouses();
    });
  };

  render() {
    let { houses } = this.state;
    let allHouses = houses.map(e => {
      return (
        <House key={e.id} e={e} id={e.id} deleteHouse={this.deleteHouse} />
      );
    });
    return (
      <div>
        DashBoard
        <Link to="/wizard/step1">Add New Property</Link>
        {allHouses}
      </div>
    );
  }
}

export default DashBoard;
