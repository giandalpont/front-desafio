import './style.css';

import React from 'react';

const Checkbox = (props) => {
  return (
    <label className="Checkbox">
        <input type="checkbox" {...props.attr} />
        {props.label}
      </label>
  );
};

export default Checkbox;