import React from 'react';
import cn from 'classnames';

import props from './loader.proptypes';
import css from './loader.module.css';

Loader.propTypes = props.propTypes;
Loader.defaultProps = props.defaultProps;

/**
 * @name Loader
 *
 * @param {object} props
 * @returns {JSX.Element}
 */
export default function Loader ({ isLoading, className }) {
  if (!isLoading) {
    return (null);
  }

  return (<div className={cn(css.loader, className)}>Loading...</div>);
}
