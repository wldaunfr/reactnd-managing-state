import React from 'react';

const Equation = (props) => (
  <div className="equation">
    <p className="text">{`${props.summand1} + ${props.summand2} + ${props.summand3} = ${props.sum}`}</p>
  </div>
)

export default Equation;
