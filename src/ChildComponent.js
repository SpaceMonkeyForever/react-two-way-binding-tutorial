import React, { Component } from 'react';

class ChildComponent extends Component {

  handleClick(e) {
    this.props.changeColor(e.target.value);
  }

  render() {
    return (
      <div className="child-component">
        <h4>Child Component</h4>

        <button value="Red" onClick={this.handleClick.bind(this)}>
          Red
        </button>

        <button value="Blue" onClick={this.handleClick.bind(this)}>
          Blue
        </button>

        <button value="White" onClick={this.handleClick.bind(this)}>
          White
        </button>
      </div>
    );
  }
}

export default ChildComponent;
