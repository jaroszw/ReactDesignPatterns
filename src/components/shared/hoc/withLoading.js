import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const withLoading = (Cmp) => {
  class WithLoading extends Component {
    render() {
      const { loading, ...rest } = this.props;

      if (loading) {
        return <LoadingSpinner />;
      }
      return <Cmp {...rest} />;
    }
  }

  WithLoading.propTypes = { loading: PropTypes.bool.isRequired };
  WithLoading.displayName = `withLoading(${Cmp.displayName || Cmp.name})`;

  return WithLoading;
};

export default withLoading;
