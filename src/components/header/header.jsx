import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import PlayerSearch from '@/components/player-search';
import props from './header.proptypes';
import css from './header.module.css';

Header.propTypes = props.propTypes;
Header.defaultProps = props.defaultProps;

export default function Header ({ className }) {
  return (
    <header className={cn(css.header, className)}>
      <div className={css.headerHero}>
        <Link to="/" className={css.headerLink}>Home</Link>
      </div>

      <div className={css.headerLinks}>

      </div>

      <div className={css.headerSearch}>
        <PlayerSearch />
      </div>
    </header>
  );
}
