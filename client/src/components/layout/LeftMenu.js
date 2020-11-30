import React from 'react';
import { NavLink } from 'react-router-dom'; 

export default function LeftMenu() {
  return (
    <div className="left__menu">
      <NavLink activeClassName="left-menu__selected" to="/dashboard">
        <i className="fas fa-dollar-sign" />
      </NavLink>
      <NavLink activeClassName="left-menu__selected" to="/finances">
        <i className="fas fa-shopping-cart" />
      </NavLink>
      <NavLink activeClassName="left-menu__selected" to="/settings">
        <i className="fas fa-cog" />
      </NavLink>
    </div>
  )
}