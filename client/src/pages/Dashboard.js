import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { Widget } from '../components/Widget';
import { RightMenu } from '../components/RightMenu';
import { IOForm } from '../components/IOForm';
import { SimpleTable, TotalsFooter } from '../components/Table';
import { openRightMenu } from '../actions';
import { Types } from '../components/IOForm/types-enum';
import { sumTableAmounts } from '../helpers';
import './styles/dashboard.css';

export function Dashboard() {
  const OUTCOME = useSelector(({ recordsReducer }) => recordsReducer.OUTCOME);
  const INCOME = useSelector(({ recordsReducer }) => recordsReducer.INCOME);

  const dispatch = useDispatch();
  const [dashboard, setDashboard] = useState({
    records: {
      id: nanoid(),
      type: Types.OUTCOME,
      date: new Date().toDateInputValue(),
      concept: '',
      amount: '',
      comment: ''
    }
  });

  function _openRightMenu(type) {
    setDashboard({ records: { id: nanoid(), type }});
    dispatch(openRightMenu());
  }

  function _handleRowClick(records, recordId) {
    const record = records.filter(record => record.id === recordId)[0];
    setDashboard({ records: { ...record }});
    dispatch(openRightMenu());
  }

  return (
    <div id="dashboard">
      <Widget
        key="outcomes"
        title="Outcomes"
        icon="fas fa-money-check"
        onAddClick={ () => _openRightMenu('outcome') }
        footer={ <TotalsFooter total={ sumTableAmounts(OUTCOME) } /> }
      >
        <SimpleTable info={ OUTCOME } type={ Types.OUTCOME } onRowClick={ _handleRowClick } />
      </Widget>
      <Widget
        key="incomes"
        title="Incomes"
        icon="fas fa-chart-line"
        onAddClick={ () => _openRightMenu('income') }
        footer={ <TotalsFooter total={ sumTableAmounts(INCOME) } /> }
      >
        <SimpleTable info={ INCOME } type={ Types.INCOME } onRowClick={ _handleRowClick } />
      </Widget>
      <Widget
        key="balance"
        title="Balance"
        icon="fas fa-balance-scale"
        type={ 1 }
        readonly
      >
        <SimpleTable info={ [] } type={ 1 } />
      </Widget>
      <RightMenu title="New entry">
        <IOForm record={ dashboard.records } />
      </RightMenu>
    </div>
  )
}