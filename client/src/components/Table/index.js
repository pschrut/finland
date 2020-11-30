import React, { useEffect } from 'react';
import { Types } from '../IOForm/types-enum';
import '../../helpers';
import './table.css';

export function SimpleTable({ info, type, onRowClick }) {
  useEffect(() => {
  })

  function _handleRowClick(recordId) {
    return (typeof onRowClick === "function") ? onRowClick(info, recordId) : null;
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th><i className="fas fa-calendar-day" /></th>
          <th>Concept</th>
          <th><abbr title="Played">Amount</abbr></th>
        </tr>
      </thead>
      <tbody>
        {
          info.map((element) => {
            const { id, date, concept, amount } = element;
            return (
              <tr key={ id } onClick={ () => _handleRowClick(id) }>
                <td>{ new Date(date).toLocaleDateStringYY() }</td>
                <td>{ concept }</td>
                <td className={ (type === Types.OUTCOME) ? 'table__red' : 'table__green' }>{ amount }</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export function TotalsFooter({ total }) {
  return (
    <div id="totals-footer">
      <div id="total-title">TOTAL</div>
      <div id="total-amount">{ total }</div>
    </div>
  )
}