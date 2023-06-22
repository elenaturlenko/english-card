import React from 'react';
import './Error.scss';
import Error404 from '../../assets/image/Error404.jpg';

function Error() {
  return (
        <div className="error">
          <img className="error__img" src={Error404} alt="error" />
        </div>
  );
}

export default Error;
