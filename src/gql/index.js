import { gql } from '@apollo/client';

/**
 *
 */
export const getPlayerDetails = gql`
  query getPlayerDetails($playerid: Int!) {
    players (where: {playerid: {_eq: $playerid}}) {
      playerid
      bats
      birthcity
      birthcountry
      birthdate
      birthstate
      firstname
      headshoturl
      height
      lastname
      number
      position
      teamid
      throws
      usesname
      weight
      team {
        city
        name
        teamid
      }
      battingCareer {
        ab
        b1
        b2
        b3
        ci
        cs
        g
        hbp
        hr
        ibb
        pa
        r
        rbi
        sb
        sf
        so
        sh
        h @client
        bb @client
        avg @client
        obp @client
        ops @client
        slg @client
        team {
          abbr
          name
          city
          slug @client
        }
        ubb
        yearid
        levelid
      }
      pitchingCareer {
        ab
        b1
        b2
        b3
        cg
        er
        g
        gf
        gs
        hr
        hbp
        ibb
        l
        levelid
        outs
        pa
        playerid
        r
        sh
        sf
        sho
        so
        sv
        bb @client
        h @client
        avg @client
        era @client
        whip @client
        ip @client
        team {
          abbr
          name
          city
          slug @client
        }
        ubb
        w
        yearid
      }
    }
  }
`;

/**
 *
 */
export const getLeagues = gql`
  query getLeagues {
    leagues {
      leagueid
      levelid
      name
      teams {
        name
        city
        abbr
        teamid
        slug @client
      }
    }
  }
`;

/**
 *
 */
export const getLeagueTeams = gql`
  query getLeagueTeams {
    teams {
      name
      city
      teamid
      abbr
      slug @client
      leagueName @client
      league {
        name
      }
    }
  }
`;

/**
 *
 */
export const TeamsDetails = gql`
  query TeamsDetails($teamid: Int!) {
    teams(where: {teamid: {_eq: $teamid}}) {
      name
      city
      teamid
      abbr
      roster {
        firstname
        lastname
        position
        number
        headshoturl
        playerid
        slug @client
      }
    }
  }
`;

/**
 *
 */
export const getLeagueRoster = gql`
 query getLeagueRoster {
   players {
     playerid
     firstname
     lastname
     position
     team {
       abbr
     }
     slug @client
     pos @client
   }
 }
`;
