import PropTypes from 'prop-types';

export default {
  propTypes: {
    className: PropTypes.string,
    children: PropTypes.node,
    as: PropTypes.string
  },
  defaultProps: {
    className: null,
    children: null,
    as: 'h1'
  }
};
