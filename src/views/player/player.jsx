import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';
import { useParams, Navigate, Link } from 'react-router-dom';

import { SiteContext } from '@/context/site-context';
import SectionTitle from '@/components/section-title';
import Loader from '@/components/loader/loader';
import PlayerHeadshot from '@/components/player-headshot';
import BattingStats from '@/components/batting-stats';
import PitchingStats from '@/components/pitching-stats';
import { getPlayerDetails } from '@/gql';

import css from './player.module.css';

export default function PlayerView () {
  const params = useParams();
  const { players } = useContext(SiteContext);
  const playerCtx = players.find((d) => d.slug === params.playerSlug);
  const { playerid } = playerCtx;

  if (!playerid) {
    return <Navigate to="/" />;
  }

  const { loading, data } = useQuery(getPlayerDetails, { variables: { playerid } });

  if (loading) {
    return (<Loader isLoading={loading} />);
  }

  const player = data.players[0];
  const name = `${player.firstname} ${player.lastname}`;

  const pitchingStats = ((arr) => {
    if (!arr || !arr.length) {
      return (null);
    }

    return (
      <section>
        <SectionTitle>Career Pitching Stats</SectionTitle>
        <PitchingStats rows={arr.slice(0).reverse()} />
      </section>
    );
  })(player.pitchingCareer);

  const battingStats = ((arr) => {
    if (!arr || !arr.length) {
      return (null);
    }

    return (
      <section>
        <SectionTitle>Career Batting Stats</SectionTitle>
        <BattingStats rows={arr.slice(0).reverse()} />
      </section>
    );
  })(player.battingCareer);

  console.log(player);

  return (
    <main className={css.player}>

      <header className={css.playerHeader}>
        <PlayerHeadshot className={css.playerHeadshot} src={player.headshoturl} name={name} size="large" />
        <div className={css.playerName}>{name}</div>
      </header>

      {pitchingStats}
      {battingStats}

    </main>
  );
}
