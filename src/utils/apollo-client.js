import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import toSlug from '@/utils/to-slug';
import positions from '@/constants/positions';

export const resolvers = {
  players: {
    slug: (pl) => toSlug(pl.firstname, pl.lastname),
    pos: (pl) => positions[pl.position]
  },
  teams: {
    slug: (t) => toSlug(t.city, t.name),
    leagueName: (t) => t.league.name
  },
  bstatsplayersseasonsbyteam: {
    h: (d) => d.b1 + d.b2 + d.b3 + d.hr,
    bb: (d) => d.ubb + d.ibb,
    avg: (d) => ((d.b1 + d.b2 + d.b3 + d.hr) / d.ab),
    obp: (d) => ((d.b1 + d.b2 + d.b3 + d.hr + d.ubb + d.ibb + d.hbp) / (d.ab + d.ubb + d.ibb + d.hbp + d.sf)),
    slg: (d) => (((d.b1 * 1) + (d.b2 * 2) + (d.b3 * 3) + (d.hr * 4)) / d.ab),
    ops: (d) => (((d.b1 + d.b2 + d.b3 + d.hr + d.ubb + d.ibb + d.hbp) / (d.ab + d.ubb + d.ibb + d.hbp + d.sf)) + ((d.b1 + (d.b2 * 2) + (d.b3 * 3) + (d.hr * 4)) / d.ab))
  },
  pstatsplayersseasonsbyteam: {
    h: (d) => d.b1 + d.b2 + d.b3 + d.hr,
    bb: (d) => d.ubb + d.ibb,
    avg: (d) => ((d.b1 + d.b2 + d.b3 + d.hr) / d.ab),
    obp: (d) => ((d.b1 + d.b2 + d.b3 + d.hr + d.ubb + d.ibb + d.hbp) / (d.ab + d.ubb + d.ibb + d.hbp + d.sf)),
    slg: (d) => (((d.b1 * 1) + (d.b2 * 2) + (d.b3 * 3) + (d.hr * 4)) / d.ab),
    ops: (d) => (((d.b1 + d.b2 + d.b3 + d.hr + d.ubb + d.ibb + d.hbp) / (d.ab + d.ubb + d.ibb + d.hbp + d.sf)) + ((d.b1 + (d.b2 * 2) + (d.b3 * 3) + (d.hr * 4)) / d.ab)),
    ip: (d) => (Math.floor(d.outs / 3) + (d.outs % 3) / 10),
    era: (d) => (d.er * 27) / d.outs,
    whip: (d) => (d.b1 + d.b2 + d.b3 + d.hr + d.ubb + d.ibb) / ((d.outs / 3) + (d.outs % 3) / 10.0)
  }
};

export default function createApolloClient () {
  const uri = import.meta.env.VITE_MLB_GQL_SOURCE;
  const token = import.meta.env.VITE_MLB_GQL_TOKEN;

  return new ApolloClient({
    link: new HttpLink({
      uri,
      headers: {
        'x-hasura-admin-secret': token
      }
    }),
    cache: (new InMemoryCache),
    resolvers
  });
}
