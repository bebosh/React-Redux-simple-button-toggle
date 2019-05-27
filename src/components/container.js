import React, { Component } from "react";
import { connect } from "react-redux";
import ToggleButton from "./ToggleButton";
import CloseButton from "./CloseButton";
import Toggle from "./toggle";

class container extends Component {
  render() {
    return (
      <div>
        <CloseButton />
        <div className="container">
          <ToggleButton />
          <Toggle toggle={this.props.state.toggle.visibility} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { state };
};

export default connect(
  mapStateToProps
)(container);
