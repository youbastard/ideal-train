import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';
import { useParams, Navigate, Link } from 'react-router-dom';

import groupBy from '@/utils/group-by';
import { TeamsDetails } from '@/gql';
import { SiteContext } from '@/context/site-context';
import PlayerHeadshot from '@/components/player-headshot';
import TeamLogo from '@/components/team-logo';
import css from './team.module.css';

export default function TeamView () {
  const params = useParams();
  const { teams, positions } = useContext(SiteContext);
  const teamCtx = teams.find((d) => d.slug === params.teamSlug);
  const { teamid } = teamCtx;

  if (!teamid) {
    return <Navigate to="/" />;
  }

  const { loading, data } = useQuery(TeamsDetails, { variables: { teamid } });

  if (loading) {
    return (<div>loading...</div>);
  }

  const team = data.teams[0];

  const roster = team.roster.map((pl) => {
    const pos = positions[pl.position];
    return ({ ...pl, ...pos });
  });



  return (
    <main className={css.team}>

      <header className={css.teamHeader}>
        <TeamLogo className={css.teamLogo} teamid={team.teamid} name={`${team.city} ${team.name}`} size="medium" />
        <div className={css.teamName}>{team.city} {team.name}</div>
      </header>

      <section className={css.teamRoster}>
        {
          groupBy(roster, 'type').map((g) => (
            <section key={g.key}>
              <h2 className={css.teamPosition}>{g.key}</h2>
              <section className={css.teamList}>
                { g.items.map((player) => (
                  <Link className="w-1/4 flex my-2" key={player.playerid} to={`/player/${player.slug}/`}>
                    <PlayerHeadshot name={`${player.firstname} ${player.lastname}`} src={player.headshoturl} size="thumbnail" />
                    <div className={css.teamPlayer}>
                      <div className={css.teamPlayerName}>{player.firstname} {player.lastname}</div>
                      <div className={css.teamJersey}>#{player.number}</div>
                    </div>
                  </Link>
                ))}
              </section>
            </section>
          ))
        }
      </section>
    </main>
  );
}
