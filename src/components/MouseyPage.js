import React, { Component } from "react";

class Mouse extends Component {
  state = { x: 0, y: 0 };

  handleMouseMove = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  };

  render() {
    return (
      <div onMouseMove={this.handleMouseMove}>
        {this.props.children(this.state)}
      </div>
    );
  }
}

export default class MouseyPage extends React.Component {
  render() {
    const styles = {
      position: "fixed",
      height: "100%",
      width: "100%",
      textAlign: "center",
      color: "black",
      backgroundColor: "#344dd1"
    };
    return (
      <Mouse>
        {mouse => (
          <div style={styles}>
            Mouse Position: ({mouse.x}, {mouse.y})
          </div>
        )}
      </Mouse>
    );
  }
}
