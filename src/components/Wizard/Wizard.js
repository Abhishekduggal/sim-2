import React, { Component } from "react";

import { Link, Route } from "react-router-dom";

import { connect } from "react-redux";

import { reset } from "../../ducks/reducer";

class Wizard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    let { reset } = this.props;
    return (
      <div>
        <Link to="/" onClick={reset}>
          Cancel
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { reset }
)(Wizard);
