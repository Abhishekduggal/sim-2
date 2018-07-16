import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleMortgage, handleRent } from "../../ducks/reducer";

import Wizard from "../Wizard/Wizard";

class StepThree extends Component {
  constructor() {
    super();
    this.state = {
      mortgage: 0,
      rent: 0
    };
  }

  handleInputs = (val, state) => {
    this.setState({
      [state]: val
    });
  };

  addHouse(name, address, city, state, zip, img, mortgage, rent) {
    axios
      .post("/api/houses", {
        name,
        address,
        city,
        state,
        zip,
        img,
        mortgage,
        rent
      })
      .then(res => {
        console.log(res);
      });
  }

  render() {
    let {
      handleMortgage,
      handleRent,
      mortgage,
      rent,
      name,
      address,
      city,
      state,
      zip,
      img
    } = this.props;
    let { mortgage: stateMortgage, rent: stateRent } = this.state;
    return (
      <div>
        <h3>Recommend Rent: $$$</h3>
        <input
          placeholder="mortgage"
          type="number"
          value={mortgage || stateMortgage}
          onChange={e => this.handleInputs(e.target.value, "mortgage")}
        />
        <input
          placeholder="rent"
          type="number"
          value={rent || stateRent}
          onChange={e => this.handleInputs(e.target.value, "rent")}
        />
        <Wizard />
        <Link to="/wizard/step2">Previous Step</Link>
        <Link
          to="/"
          onClick={() =>
            this.addHouse(
              name,
              address,
              city,
              state,
              zip,
              img,
              stateMortgage,
              stateRent
            )
          }
        >
          Complete
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { handleMortgage, handleRent }
)(StepThree);

// onClick={() => this.addHouse(name, address, city, state, zipcode)}
