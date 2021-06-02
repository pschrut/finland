import React, { useEffect, useState } from 'react';

import { useDispatch, useStore } from 'react-redux';

import { addIncomeRecord, addOutcomeRecord, closeRightMenu } from '../../actions';

import { SelectField, TextField, TextAreaField, DateField, FormButtons, ErrorHandler } from '../Field';

import { Types } from './types-enum';

import '../../helpers';

import './IOForm.css';



export function IOForm({ record }) {

  const dispatch = useDispatch();

  const store = useStore();

  const [form, setForm] = useState(record);

  
  
  useEffect(() => {
  
    setForm({ ...form, ...record });
  
    const unsubscribe = store.subscribe(() => {
  
      const showRightMenu = store.getState().workspaceReducer.showRightMenu;
  
      if (!showRightMenu) { _clearForm(); }
  
    });
  
    return () => {
  
      unsubscribe();
  
    }
  
  }, [record]);


  
  function _handleChange(e) {
  
    setForm({ ...form, [e.target.id]:  e.target.value });
  
  }


  
  function _clearForm() {
  
  
    setForm({
  
      id: '',
  
      type: form.type,
  
      date: new Date().toDateInputValue(),
  
      concept: '',
  
      amount: '',
  
      comment: ''
  
    });
  
  }


  
  function _handleCancel() {
  
    _clearForm();
  
    dispatch(closeRightMenu());
  
  }


  
  function _handleSubmit(e) {
  
  
    e.preventDefault();


    
    _clearForm();


    
    if (form.type === Types.OUTCOME) {
    
      dispatch(addOutcomeRecord({
    
        id: form.id,
    
    
        date: form.date,
    
        concept: form.concept,
    
    
        amount: form.amount
    
      }));
    
    } else if (form.type === Types.INCOME) {
    
    
      dispatch(addIncomeRecord({
    
        id: form.id,
    
        date: form.date,
    
        concept: form.concept,
    
        amount: form.amount
    
      }))
    
    }
  }



  
  return (
  
  <div id="IOForm">
  
      <form onSubmit={ _handleSubmit }>
  
        <input type="text" id="id" value={ form.id } />
  
  
        <SelectField
  
  name="type"
  
  options={ Object.values(Types) }
  
  id="type"
  
  onChange={ _handleChange }
  
  value={ form.type }
  
  />
  
        <TextField
  
  placeholder="Concept"
  
  id="concept"
  
  name="concept"
  
  required
  
  value={ form.concept }
  
  onChange={ _handleChange }
  
  />
  
  
        <div className="fields-row">
  
          <DateField
  
  placeholder="Date"
  
  id="date"
  
  name="date"
  
  value={ form.date }
  
  onChange={ _handleChange }
  
  
  required
  
  />
  
          <TextField
  
  placeholder="Amount"
  
  id="amount" 
  
  name="amount"
  
  value={ form.amount }
  
  onChange={ _handleChange }
  
  required
  
  />
  
        </div>
  
        <TextAreaField
  
  placeholder="Comment (Optional)"
  
  id="comment"
  
  onChange={ _handleChange }
  
  value={ form.comment }
  
  />
  
        <hr />
  
        <FormButtons onCancelClick={ _handleCancel } />
  
      </form>
  
    </div>
  
  )
}







