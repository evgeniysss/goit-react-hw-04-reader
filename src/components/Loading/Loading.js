import React from 'react';
import T from 'prop-types';

const Loading = ({ error, timedOut, pastDelay, retry }) => {
  if (error) {
    return (
      <div>
        Error!{' '}
        <button type="button" onClick={retry}>
          Retry
        </button>
      </div>
    );
  }

  if (timedOut) {
    return (
      <div>
        Taking a long time...{' '}
        <button type="button" onClick={retry}>
          Retry
        </button>
      </div>
    );
  }

  if (pastDelay) {
    return <div>Loading...</div>;
  }

  return null;
};
Loading.defaultProps = {
  error: null,
};
Loading.propTypes = {
  error: T.string,
  timedOut: T.bool.isRequired,
  pastDelay: T.bool.isRequired,
  retry: T.func.isRequired,
};
export default Loading;
