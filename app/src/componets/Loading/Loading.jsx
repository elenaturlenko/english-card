import React from 'react';
import './Loading.scss';
import LoadingGif from '../../assets/LoadingGif.gif';

function Loading() {
  return (
    <div className="loading">
      <img className="loading__gif" src={LoadingGif} alt="loading" />
    </div>
  );
}

export default Loading;
