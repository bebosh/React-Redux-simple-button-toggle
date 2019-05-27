import React, { Component } from "react"
import { connect } from "react-redux"
import { toggleElement } from "../actions"

class ToggleButton extends Component {
  handleToggle = () => {
    this.props.toggleElement();
  };
  render() {
    return (
      <div>
      <button onClick={this.handleToggle}>Toggle Button</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { state }

}

export default connect(
  mapStateToProps, {toggleElement}
)(ToggleButton);