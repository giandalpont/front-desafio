import './style.css';

import React from 'react';

const Input = (props) => {
  return (
    <div className='InputGroup'>
      <input type='text' className={props.hasValue ? 'hasValue' : ''} {...props.attr} onChange={props.onChange} />
      <label className='Input'>
        {props.label}
      </label>
    </div>
  );
};

export default Input;