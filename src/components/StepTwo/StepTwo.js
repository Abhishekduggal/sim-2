import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleImg } from "../../ducks/reducer";

import Wizard from "../Wizard/Wizard";

class StepTwo extends Component {
  constructor() {
    super();
    this.state = {
      imgUrl: ""
    };
  }

  handleUrl = val => {
    this.setState({
      imgUrl: val
    });
  };

  render() {
    let { handleImg, img } = this.props;
    return (
      <div>
        <input
          placeholder="img"
          value={img || ""}
          onChange={e => handleImg(e.target.value)}
        />
        <Link to="/wizard/step1/">Previous Step</Link>
        <Link to="/wizard/step3/">Next Step</Link>
        <Wizard />
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { handleImg }
)(StepTwo);
