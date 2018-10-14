import React, { Component } from 'react';
import logo from './logo.svg';
import ChildComponent from './ChildComponent';

export class ParentComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 'Select a color',
      extra: "TestColor",
    };

    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(newColor){
    this.setState({
      color: newColor,
    });
  }

  render() {
    const { color } = this.state;

    return (
      <div className="parent-component">
        <header className="header">
          <img src={logo} className="react-logo" alt="logo" />
          <h4>Parent Component</h4>
          <p>{color}</p>
        </header>
        <ChildComponent changeColor={this.changeColor} extra={this.state.extra}/>
      </div>
    );
  }
}