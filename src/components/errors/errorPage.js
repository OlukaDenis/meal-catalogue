import React from 'react';
import errorImage from '../../error.png';
import '../../styles/errorPage.scss';

const ErrorPage = ({ error }) => (
  <div className="error-page">

    <div className="error-info">
      <img src={errorImage} />
      <h4>{error}</h4>
    </div>

  </div>
);

export default ErrorPage;
