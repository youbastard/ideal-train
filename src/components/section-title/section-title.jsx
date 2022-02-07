import React from 'react';
import cn from 'classnames';

import props from './section-title.proptypes';
import css from './section-title.module.css';

SectionTitle.propTypes = props.propTypes;
SectionTitle.defaultProps = props.defaultProps;

/**
 *
 * @param {object} props
 * @returns
 */
export default function SectionTitle ({ children, className, as: Tag, ...rest }) {
  return (<Tag className={cn(css.sectionTitle, className)} {...rest}>{children}</Tag>);
}
