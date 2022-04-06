import './style.css';

import React from 'react';

const Radio = (props) => {
  return (
    <label className={props.active === 'true' ? 'Radio active' : 'Radio'}>
      <input type='radio' {...props.attr} onChange={props.onChange} />
      {props.label}
    </label>
  );
};

export default Radio;