import React from 'react';
import './ButtonDelete.scss';

function ButtonDelete(props) {
  // eslint-disable-next-line react/prop-types
  const { onClick } = props;
  return (
    <button className="btn-delete" onClick={onClick}>
      Delete
    </button>
  );
}

export default ButtonDelete;
