import React from 'react';
import Aux from '../../components/_Aux';
import '../../assets/scss/style.scss';

function ErrorPage(props) {
  const { location } = props;

  const code = 404;
  const message = 'Page Not found';

  return (
    <Aux>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404" />
          <h1>{code}</h1>
          <h2>Oops! {message}</h2>
          <h6 className="text-muted">path: {location.pathname}</h6>
          <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
          <a href="/">Please go to the homepage</a>
        </div>
      </div>
    </Aux>
  );
}

export default ErrorPage;
