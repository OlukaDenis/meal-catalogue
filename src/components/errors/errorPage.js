import React from 'react';
import errorImage from '../../error.png';

const ErrorPage = ({ error }) => {

  return (
    <div className="error-page">

      <div>
        <img src={errorImage} />
        <h4>{error}</h4>
      </div>
      
      
    </div>
  )
}

export default ErrorPage;