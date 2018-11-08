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
      border: "10px solid #73AD21",
      height: "50%",
      width: "75%",
      textAlign: "center",
      color: "black",
      background: `url("/images/cheese-wedge-icon.png") no-repeat center`,
      backgroundColor: "#344dd1"
    };
    return (
      <Mouse>
        {mouse => (
          <ul className="box-layout__mouseybox">
            <div style={styles}>
              Mouse Position: ({mouse.x}, {mouse.y})
            </div>
          </ul>
        )}
      </Mouse>
    );
  }
}
