import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FetchError from '../FetchError/FetchError';

const withHandleError = (Cmp) => {
  class WithHandleError extends Component {
    render() {
      const { error, ...rest } = this.props;

      if (error) {
        return <FetchError />;
      }

      return <Cmp {...rest} />;
    }
  }

  withHandleError.propTypes = {
    error: PropTypes.object,
  };

  withHandleError.defaultProps = {
    error: null,
  };

  withHandleError.displayName = `withHandleError(${
    Cmp.displayName || Cmp.name
  })`;

  return WithHandleError;
};

export default withHandleError;
