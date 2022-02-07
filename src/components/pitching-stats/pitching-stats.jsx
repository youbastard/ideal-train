import React from 'react';
import { Link } from 'react-router-dom';

import pct from '@/utils/pct';

import props from './pitching-stats.proptypes';
import css from '@/styles/stat-table.module.css';

PitchingStats.propTypes = props.propTypes;
PitchingStats.defaultProps = props.defaultProps;

/**
 * @name BattingStats
 *
 * @param {object} props
 * @returns {JSX.Element}
 */
export default function PitchingStats ({ rows }) {
  return (
    <section className={css.st}>
      <table className={css.stTable}>
        <colgroup span="2"></colgroup>
        <colgroup span="3"></colgroup>
        <colgroup span="3"></colgroup>
        <colgroup span="3"></colgroup>
        <colgroup span="8"></colgroup>
        <colgroup span="2"></colgroup>

        <thead className={css.stHead}>
          <tr className={css.stRow}>
            <th className={css.stTh} data-text="true">Season</th>
            <th className={css.stTh} data-text="true">Team</th>

            <th className={css.stTh}><abbr title="Wins">W</abbr></th>
            <th className={css.stTh}><abbr title="Losses">L</abbr></th>
            <th className={css.stTh}><abbr title="Earn Run Average">ERA</abbr></th>

            <th className={css.stTh}><abbr title="Games Played">G</abbr></th>
            <th className={css.stTh}><abbr title="Games Started">GS</abbr></th>
            <th className={css.stTh}><abbr title="Complete Games">CG</abbr></th>

            <th className={css.stTh}><abbr title="Shutouts">SHO</abbr></th>
            <th className={css.stTh}><abbr title="Saves">SV</abbr></th>

            <th className={css.stTh}><abbr title="Innings Pitched">IP</abbr></th>
            <th className={css.stTh}><abbr title="Hits">H</abbr></th>
            <th className={css.stTh}><abbr title="Runs">R</abbr></th>
            <th className={css.stTh}><abbr title="Earned Runs">ER</abbr></th>
            <th className={css.stTh}><abbr title="Home Runjs">HR</abbr></th>
            <th className={css.stTh}><abbr title="Batters Hit by Pitch">HB</abbr></th>
            <th className={css.stTh}><abbr title="Walks">BB</abbr></th>
            <th className={css.stTh}><abbr title="Strikeouts">SO</abbr></th>

            <th className={css.stTh}><abbr title="Walks and Hits per Innings Pitched">WHIP</abbr></th>
            <th className={css.stTh}><abbr title="Batting Average Against">AVG</abbr></th>
          </tr>
        </thead>
        <tbody className={css.stBody}>
          { rows.map((row) => (
            <tr className={css.stRow} key={`${row.yearid}_${row.team.abbr}`}>
              <td className={css.stTd} data-text="true">{row.yearid}</td>
              <td className={css.stTd} data-text="true"><Link to={`/team/${row.team.slug}`}>{row.team.abbr}</Link></td>

              <td className={css.stTd}>{row.w}</td>
              <td className={css.stTd}>{row.l}</td>
              <td className={css.stTd}>{row.era.toFixed(2)}</td>

              <td className={css.stTd}>{row.g}</td>
              <td className={css.stTd}>{row.gs}</td>
              <td className={css.stTd}>{row.cg}</td>

              <td className={css.stTd}>{row.sho}</td>
              <td className={css.stTd}>{row.sv}</td>

              <td className={css.stTd}>{row.ip.toFixed(1)}</td>
              <td className={css.stTd}>{row.h}</td>
              <td className={css.stTd}>{row.r}</td>
              <td className={css.stTd}>{row.er}</td>
              <td className={css.stTd}>{row.hr}</td>
              <td className={css.stTd}>{row.hbp}</td>
              <td className={css.stTd}>{row.bb}</td>
              <td className={css.stTd}>{row.so}</td>

              <td className={css.stTd}>{row.whip.toFixed(2)}</td>
              <td className={css.stTd}>{pct(row.avg)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
