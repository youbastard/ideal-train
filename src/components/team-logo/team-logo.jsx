import React, { useState } from 'react';
import cn from 'classnames';

import css from './team-logo.module.css';
import props from './team-logo.proptypes';

TeamLogo.propTypes = props.propTypes;
TeamLogo.defaultProps = props.defaultProps;

/**
 *
 * @param {*} param0
 * @returns
 */
export default function TeamLogo ({ teamid, name, className, size }) {
  const [imgSrc, setImgSrc] = useState(`https://www.mlbstatic.com/team-logos/${teamid}.svg`);

  const handleError = (e) => {
    setImgSrc('https://via.placeholder.com/100x100');
  };


  return (
    <img
      className={cn(css.ph, className)}
      onError={handleError}
      src={imgSrc}
      alt={`Logo for ${name}`}
      title={name}
      data-size={size} />
  );
}
