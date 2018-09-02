import React, { Component } from "react";
import logo from "./cursor.png";
import PropTypes from "prop-types";

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img
        src={logo}
        style={{
          position: "absolute",
          left: mouse.x,
          top: mouse.y,
          height: "30px",
          width: "30px"
        }}
      />
    );
  }
}

class Mouse extends React.Component {
  static propTypes = {
    render: PropTypes.func.isRequired
  };

  state = { x: 0, y: 0 };

  handleMouseMove = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  };

  render() {
    return (
      <div
        style={{ height: "100%", width: "100%", position: "absolute" }}
        onMouseMove={this.handleMouseMove}
      >
        {this.props.render(this.state)}
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <Mouse render={mouse => <Cat mouse={mouse} />} />
      </div>
    );
  }
}

export default App;
