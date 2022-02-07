import React from 'react';
import { useQuery } from '@apollo/client';
import { Routes, Route } from 'react-router-dom';

import SiteProvider from '@/context/site-context';

import HomeView from '@/views/home';
import PlayerRoute from '@/views/player';
import PlayersRoute from '@/views/players';
import TeamRoute from '@/views/team';
import TeamsRoute from '@/views/teams';
import NotFoundRoute from '@/views/notfound';

import Header from '@/components/header';
import Footer from '@/components/footer';

import { getLeagueTeams, getLeagueRoster } from '@/gql';

import props from './app.proptypes';
import css from './app.module.css';

App.propTypes = props.propTypes;
App.defaultProps = props.defaultProps;

/**
 * @name App
 * @returns {JSX.Element}
 */
export default function App () {
  const { loading: teamsLoading, error: teamsError, data: teamsData } = useQuery(getLeagueTeams);
  const { loading: playersLoading, error: playersError, data: playersData } = useQuery(getLeagueRoster);

  if (teamsLoading || playersLoading) {
    return (<h1>loading</h1>);
  }

  if (teamsError || playersError) {
    console.warn({ teamsError, playersError });
    return (<div>Error Fetching Data</div>);
  }

  return (
    <SiteProvider teams={teamsData?.teams} players={playersData?.players}>
      <div className={css.app}>
        <Header className={css.appHeader} />
        <main className={css.appMain}>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="player/:playerSlug" element={<PlayerRoute />} />
            <Route path="team/:teamSlug" element={<TeamRoute />} />
            <Route path="players" element={<PlayersRoute />} />
            <Route path="teams" element={<TeamsRoute />} />
            <Route path="*" element={<NotFoundRoute />} />
          </Routes>
        </main>
        <Footer className={css.appFooter} />
      </div>
    </SiteProvider>
  );
}
