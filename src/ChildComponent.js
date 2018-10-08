import React from 'react';
import TestComponent from './TestComponent';

export default function ChildComponent(props) {
  const handleClick = e => props.changeColor(e.target.value);

  return (
    <div className="child-component">
      <h4>Child Component</h4>

      <TestComponent text="cool"></TestComponent>

      {["Red", "Blue", "White"].map(x => <Button element={x} key={x}></Button>)}
      <Button element={props.extra}></Button>
    </div>
  );

  function Button(props) {
    return(
    <button value={props.element} onClick={handleClick}>
      {props.element}
    </button>
    );
  }
}