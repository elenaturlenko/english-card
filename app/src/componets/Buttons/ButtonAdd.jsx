import React from 'react';
import './ButtonAdd.scss';

function ButtonAdd(props) {
  // eslint-disable-next-line react/prop-types
  const { save, disabled } = props;
  return <button className="btn-add" onClick={save} disabled={disabled}>Add</button>;
}

export default ButtonAdd;
