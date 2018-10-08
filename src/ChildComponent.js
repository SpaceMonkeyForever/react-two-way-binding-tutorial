import React from 'react';

export default function ChildComponent(props) {
  const handleClick = e => props.changeColor(e.target.value);

  return (
    <div className="child-component">
      <h4>Child Component</h4>
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