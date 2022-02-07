import React from 'react';
import cn from 'classnames';

import props from './footer.proptypes';
import css from './footer.module.css';

Footer.propTypes = props.propTypes;
Footer.defaultProps = props.defaultProps;

/**
 * @name Footer
 *
 * @returns {JSX.Element}
 */
export default function Footer ({ className }) {
  return (
    <footer className={cn(css.footer, className)}>
      <a className={css.footerLink} href="https://github.com/youbastard/">A React / Apollo demo by Nicholas Ortenzio</a>
    </footer>
  );
}
