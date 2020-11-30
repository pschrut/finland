import React, { useState, useEffect } from 'react';
import './field.css'

export function SelectField(props) {
  const { options, id, onChange, value } = props;
  const [selectValue, setSelectValue] = useState();

  useEffect(() => {
    setSelectValue(value);
  }, [value])

  return (
    <div className="field has-addons">
      <div className="control is-expanded">
        <div className="select is-fullwidth">
          <select id={ id } onChange={ onChange } value={ selectValue } className="type-selector">
            {
              options.map((option, index) => {
                return (
                  <option key={ index } value={ option }>
                    { option }
                  </option>
                )
              })
            }
          </select>
        </div>
      </div>
    </div>
  )
}

export function TextField(props) {
  const { placeholder, id, name, value, onChange, required } = props;

  return (
    <div className="field">
      <div className="control">
        <input
          className="input"
          id={ id }
          name={ name }
          type="text"
          placeholder={ placeholder }
          value={ value }
          onChange={ onChange }
          autoComplete="off"
          required
        />
      </div>
    </div>
  )
}

export function DateField(props) {
  const { placeholder, id, name, value, onChange, required } = props;

  return (
    <div className="field">
      <div className="control">
        <input
          className="input"
          id={ id }
          name={ name }
          type="date"
          placeholder={ placeholder }
          value={ value }
          onChange={ onChange }
          autoComplete="off"
          style={ { width: "165px" } }
          required
        />
      </div>
    </div>
  )
}

export function TextAreaField(props) {
  const { placeholder, id, value, onChange } = props;
  return (
    <textarea
      className="textarea"
      id={ id }
      placeholder={ placeholder }
      onChange={ onChange }
      value={ value }
      autoComplete="off"
    />
  )
}

export function FormButtons(props) {
  const {
    submitLabel = "Submit",
    cancelLabel = "Cancel",
    onCancelClick
  } = props;

  return (
    <div className="field is-grouped">
      <div className="control">
        <button type="submit" className="button is-info is-outlined">
          { submitLabel }
        </button>
      </div>
      <div className="control">
        <button
          type="button"
          className="button is-outlined"
          onClick={ onCancelClick }
        >
          { cancelLabel }
        </button>
      </div>
    </div>
  )
}

export function ErrorHandler({ error }) {
  return (
    <div className={ (error) ? 'error-shown' : 'error-hidden' }>Error</div>
  )
}