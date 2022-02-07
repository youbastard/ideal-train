import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { getPlayersQuery } from './player-list.gql.js';
import css from './player-list.module.css';

export default function PlayerList () {
  const [searchTerms, setSearchTerms] = useState([]);
  const { loading, error, data } = useQuery(getPlayersQuery);
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [showRoster, setShowRoster] = useState(false);

  useEffect(() => {
    console.log(data, searchTerms);

    if (!data || !data.players || !data.players.length) {
      return;
    }

    if (!searchTerms.length) {
      setFilteredPlayers(data.players);
      setShowRoster(false);
      return;
    }

    // filter the player results
    const newSet = data.players.filter((d) => {
      return searchTerms.every((t) => d.slug.includes(t));
    });

    setFilteredPlayers(newSet);
    setShowRoster(true);
  }, [data, searchTerms]);

  const handleChange = (e) => {
    const { value } = e.target;
    const terms = value.split(/\W/).filter(Boolean);
    setSearchTerms(terms);
  };

  if (loading) {
    return (<div className={css.plLoading}>...Loading</div>);
  }

  if (error) {
    console.warn(error);
    return (<div className={css.plError}>Error Fetching League Roster</div>);
  }

  return (
    <section className={css.pl}>
      <h2 className={css.plHeader}>Search for a Player</h2>

      <section className={css.plSearch}>
        <input type="text" placeholder="Search for a Player" onChange={handleChange}></input>
      </section>

      <ul className={css.plList}>
        {showRoster && filteredPlayers.map((p) => (
          <li className={css.plItem} key={p.playerid}>
            <Link to={`/player/${p.slug}/`} className={css.plLink}>{p.firstname} {p.lastname}</Link>
          </li>
        ))}
      </ul>

    </section>
  );
}
