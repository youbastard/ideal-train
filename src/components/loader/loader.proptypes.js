import PropTypes from 'prop-types';

export default {
  propTypes: {
    className: PropTypes.string,
    isLoading: PropTypes.bool.isRequired
  },
  defaultProps: {
    className: null
  }
};
