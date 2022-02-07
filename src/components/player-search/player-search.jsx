import React, { useState, useEffect, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';

import { SiteContext } from '@/context/site-context';
import css from './player-search.module.css';

export default function PlayerSearch () {
  const searchInput = useRef();
  const { players } = useContext(SiteContext);
  const [searchTerms, setSearchTerms] = useState([]);
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {

    if (!players || !players.length) {
      return;
    }

    if (!searchTerms.length) {
      setFilteredPlayers(players);
      return;
    }

    // filter the player results
    const newSet = players.filter((d) => {
      return searchTerms.every((t) => d.slug.includes(t));
    });

    setFilteredPlayers(newSet);

  }, [players, searchTerms]);

  const handleChange = (e) => {
    const { value } = e.target;
    const terms = value.split(/\W/).filter(Boolean);
    setSearchTerms(terms);
  };

  const handleFocus = (e) => {
    setShowResults(true);
  };

  const handleBlur = (e) => {
    setTimeout(() => {
      setShowResults(false);
    }, 250);
  };

  const handleClick = (e) => {
    searchInput.current.value = '';
    setSearchTerms([]);
  };

  return (
    <section className={css.pls}>
      <input
        className={css.plsInput}
        placeholder="Search for a Player"
        ref={searchInput}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur} />

      { showResults && (<div className={css.plsResults}>
        <ul className={css.plsList}>
          { filteredPlayers.map((p) => (
            <li className={css.plsItem} key={p.playerid}>
              <Link to={`/player/${p.slug}/`} className={css.plsLink} onClick={handleClick}>
                <span className={css.plsName}>{p.firstname} {p.lastname}</span>
                <span className={css.plsPos}>{p.pos?.key}</span>
                <span className={css.plsTeam}>{p.team.abbr}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>)}

    </section>
  );
}
