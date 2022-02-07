import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { SiteContext } from '@/context/site-context';
import groupBy from '@/utils/group-by';
import TeamLogo from '@/components/team-logo';

import css from './team-list.module.css';

export default function TeamList () {
  const { teams } = useContext(SiteContext);
  const leagues = groupBy(teams, 'leagueName');

  if (!leagues || !leagues.length) {
    return (<div>No Team Data</div>);
  }

  return (
    <div className={css.tl}>
      {
        leagues.map((league) => (
          <section className={css.tlLeague} key={league.key}>
            <h1 className={css.tlHeader}>{league.key}</h1>
            <ul className={css.tlList}>
              {
                league.items.map((team) => (
                  <li className={css.tlItem} key={team.teamid}>
                    <Link className={css.tlLink} to={`/team/${team.slug}/`}>
                      <TeamLogo className={css.tlLogo} teamid={team.teamid} name={team.name} />
                      <div className={css.tlTeam}>{team.city} {team.name}</div>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </section>
        ))
      }
    </div>
  );
}
