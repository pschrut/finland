import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Dashboard } from './pages/Dashboard';
import { Finances } from './pages/Finances';
import { Settings } from './pages/Settings';

export function WorkspaceRoutes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/dashboard" />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/finances">
        <Finances />
      </Route>
      <Route path="/settings">
        <Settings />
      </Route>
    </Switch>
  )
}