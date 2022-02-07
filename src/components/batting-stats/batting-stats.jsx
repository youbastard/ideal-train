import React from 'react';
import { Link } from 'react-router-dom';

import pct from '@/utils/pct';

import props from './batting-stats.proptypes';
import css from '@/styles/stat-table.module.css';

BattingStats.propTypes = props.propTypes;
BattingStats.defaultProps = props.defaultProps;

/**
 * @name BattingStats
 *
 * @param {object} props
 * @returns {JSX.Element}
 */
export default function BattingStats ({ rows }) {
  return (
    <section className={css.st}>
      <table className={css.stTable}>
        <colgroup span="2"></colgroup>
        <colgroup span="1"></colgroup>
        <colgroup span="8"></colgroup>
        <colgroup span="3"></colgroup>
        <colgroup span="5"></colgroup>
        <colgroup span="2"></colgroup>
        <colgroup span="4"></colgroup>

        <thead className={css.stHead}>
          <tr className={css.stRow}>
            <th className={css.stTh} data-text="true">Season</th>
            <th className={css.stTh} data-text="true">Team</th>

            <th className={css.stTh}><abbr title="Games Played">G</abbr></th>

            <th className={css.stTh}><abbr title="At Bats">AB</abbr></th>
            <th className={css.stTh}><abbr title="Runs">R</abbr></th>
            <th className={css.stTh}><abbr title="Hits">H</abbr></th>
            <th className={css.stTh}><abbr title="Singles">B1</abbr></th>
            <th className={css.stTh}><abbr title="Doubles">B2</abbr></th>
            <th className={css.stTh}><abbr title="Triples">B3</abbr></th>
            <th className={css.stTh}><abbr title="Homeruns">HR</abbr></th>
            <th className={css.stTh}><abbr title="Runs Batted In">RBI</abbr></th>

            <th className={css.stTh}><abbr title="Walks">BB</abbr></th>
            <th className={css.stTh}><abbr title="Unintentional Walks">UBB</abbr></th>
            <th className={css.stTh}><abbr title="Intentional Walks">IBB</abbr></th>
            <th className={css.stTh}><abbr title="Hit By Pitch">HBP</abbr></th>
            <th className={css.stTh}><abbr title="Strike Outs">SO</abbr></th>

            <th className={css.stTh}><abbr title="Stolen Bases">SB</abbr></th>
            <th className={css.stTh}><abbr title="Caught Stealing">CS</abbr></th>

            <th className={css.stTh}><abbr title="Batting Average">AVG</abbr></th>
            <th className={css.stTh}><abbr title="On Base Percentage">OBP</abbr></th>
            <th className={css.stTh}><abbr title="Slugging Percentage">SLG</abbr></th>
            <th className={css.stTh}><abbr title="On Base + Slugging">OPS</abbr></th>
          </tr>
        </thead>
        <tbody className={css.stBody}>
          { rows.map((row) => (
            <tr className={css.stRow} key={`${row.yearid}_${row.team.abbr}`}>
              <td className={css.stTd} data-text="true">{row.yearid}</td>
              <td className={css.stTd} data-text="true"><Link to={`/team/${row.team.slug}`}>{row.team.abbr}</Link></td>
              <td className={css.stTd}>{row.g}</td>
              <td className={css.stTd}>{row.ab}</td>
              <td className={css.stTd}>{row.r}</td>
              <td className={css.stTd}>{row.b1 + row.b2 + row.b3 + row.hr}</td>
              <td className={css.stTd}>{row.b1}</td>
              <td className={css.stTd}>{row.b2}</td>
              <td className={css.stTd}>{row.b3}</td>
              <td className={css.stTd}>{row.hr}</td>
              <td className={css.stTd}>{row.rbi}</td>
              <td className={css.stTd}>{row.bb}</td>
              <td className={css.stTd}>{row.ubb}</td>
              <td className={css.stTd}>{row.ibb}</td>
              <td className={css.stTd}>{row.hbp}</td>
              <td className={css.stTd}>{row.so}</td>
              <td className={css.stTd}>{row.sb}</td>
              <td className={css.stTd}>{row.cs}</td>
              <td className={css.stTd}>{pct(row.avg)}</td>
              <td className={css.stTd}>{pct(row.obp)}</td>
              <td className={css.stTd}>{pct(row.slg, true)}</td>
              <td className={css.stTd}>{pct(row.ops, true)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
