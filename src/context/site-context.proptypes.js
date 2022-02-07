import PropTypes from 'prop-types';

export default {
  propTypes: {
    children: PropTypes.node.isRequired,
    teams: PropTypes.arrayOf(PropTypes.any).isRequired,
    players: PropTypes.arrayOf(PropTypes.any).isRequired
  },
  defaultProps: {}
};
