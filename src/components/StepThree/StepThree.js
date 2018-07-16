import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Wizard from "../Wizard/Wizard";

import { reset } from "../../ducks/reducer";

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
        this.props.reset();
      });
  }

  render() {
    let { name, address, city, state, zip, img } = this.props;
    let { mortgage, rent } = this.state;
    return (
      <div>
        <h3>Recommend Rent: $$$</h3>
        <input
          placeholder="mortgage"
          type="number"
          onChange={e => this.handleInputs(e.target.value, "mortgage")}
        />
        <input
          placeholder="rent"
          type="number"
          onChange={e => this.handleInputs(e.target.value, "rent")}
        />
        <Wizard />
        <Link to="/wizard/step2">Previous Step</Link>
        <Link
          to="/"
          onClick={() =>
            this.addHouse(name, address, city, state, zip, img, mortgage, rent)
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
  { reset }
)(StepThree);

// onClick={() => this.addHouse(name, address, city, state, zipcode)}
