import './style.css';

import React from 'react';

const Button = (props) => {
  return <button className="Button" {...props.attr} onClick={props.onClick}>{props.label}</button>
};

export default Button;