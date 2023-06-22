import React from 'react';
import './ButtonPrev.scss';

function ButtonPrev(props) {
  // eslint-disable-next-line react/prop-types
  const { disabled, onClick } = props;
  return (
        <button
            className= {disabled ? 'disabled' : 'btn-prev'}
            onClick={onClick}
            >
            Previous
        </button >
  );
}

export default ButtonPrev;
