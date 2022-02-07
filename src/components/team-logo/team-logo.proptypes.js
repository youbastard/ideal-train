import PropTypes from 'prop-types';

export default {
  propTypes: {
    className: PropTypes.string,
    teamid: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string,
    size: PropTypes.oneOf(['thumbnail', 'small', 'medium', 'large'])
  },
  defaultProps: {
    className: null,
    name: null,
    size: null
  }
};
