import React from 'react';
import TeamList from '@/components/team-list';
import css from './home.module.css';

export default function HomeView () {
  return (
    <main className={css.main}>
      <TeamList />
    </main>
  );
}
