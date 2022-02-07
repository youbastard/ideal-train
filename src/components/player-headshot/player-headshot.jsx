import React, { useState } from 'react';
import cn from 'classnames';

import css from './player-headshot.module.css';
import props from './player-headshot.proptypes';

PlayerHeadshot.propTypes = props.propTypes;
PlayerHeadshot.defaultProps = props.defaultProps;

/**
 *
 * @param {*} param0
 * @returns
 */
export default function PlayerHeadshot ({ src, name, className, size }) {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = (e) => {
    setImgSrc('https://via.placeholder.com/90x135');
  };

  return (
    <img
      className={cn(css.ph, className)}
      onError={handleError}
      src={imgSrc}
      alt={`Headshot for ${name}`}
      title={name}
      data-size={size} />
  );
}
