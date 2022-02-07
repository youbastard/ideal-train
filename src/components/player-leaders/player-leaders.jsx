import React from 'react';

import css from './player-leaders.module.css';

// renders the top 5 players in a
// specific stat category
export default function PlayerLeaders () {
  return (
    <div className={css.pll}>
      Player Leaders
    </div>
  );
}
