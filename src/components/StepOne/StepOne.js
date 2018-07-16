import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import {
  handleName,
  handleAddress,
  handleCity,
  handleState,
  handleZip
} from "../../ducks/reducer";

import Wizard from "../Wizard/Wizard";

class StepOne extends Component {
  render() {
    let {
      handleName,
      handleAddress,
      handleCity,
      handleState,
      handleZip,
      name,
      address,
      city,
      state,
      zip
    } = this.props;
    return (
      <div>
        <input
          placeholder="Insert Name"
          value={name || ""}
          onChange={e => handleName(e.target.value)}
        />
        <input
          placeholder="Insert Address"
          value={address || ""}
          onChange={e => handleAddress(e.target.value)}
        />
        <input
          placeholder="Insert City"
          value={city || ""}
          onChange={e => handleCity(e.target.value)}
        />
        <input
          placeholder="Insert State"
          value={state || ""}
          onChange={e => handleState(e.target.value)}
        />
        <input
          placeholder="Insert Zipcode"
          value={zip || ""}
          onChange={e => handleZip(e.target.value)}
        />
        <Wizard />
        <Link to="/wizard/step2/">Next Step</Link>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { handleName, handleAddress, handleCity, handleState, handleZip }
)(StepOne);
