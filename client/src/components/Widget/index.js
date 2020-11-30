import React from 'react';
import './widget.css';

export function Widget(props) {
  const {
    title,
    icon,
    readonly = false,
    onAddClick,
    children,
    footer = ""
  } = props;

  const widgetIcon = () => (icon) ? icon : null;

  return (
    <div id="widget">
      <span id="widget__title">
        <i className={ widgetIcon() } />
        { title }
        { !readonly && <i className="fas fa-plus add__icon" onClick={ onAddClick } /> }
      </span>
      <div id="widget__content" className={ footer ? "with__footer" : "no__foter" }>
        { children }
      </div>
      { footer && <div id="widget__footer">{ footer }</div> }
    </div>
  )
}