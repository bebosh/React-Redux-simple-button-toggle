import React, { Component } from "react";
import { connect } from "react-redux";
import { closeElement } from "../actions";

class CloseButton extends Component {
  handleClose = () => {
    this.props.closeElement();
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClose}>Close Button</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { state };
};

export default connect(
  mapStateToProps,
  { closeElement }
)(CloseButton);
