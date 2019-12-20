import PropTypes from 'prop-types';

export const upstartProps = {
  shared: {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node)
    ]),
  }
}