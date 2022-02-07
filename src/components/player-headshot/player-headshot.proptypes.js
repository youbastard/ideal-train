import PropTypes from 'prop-types';

export default {
  propTypes: {
    className: PropTypes.string,
    src: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.oneOf(['thumbnail', 'small', 'large'])
  },
  defaultProps: {
    className: null,
    src: null,
    name: null,
    size: 'small'
  }
};
