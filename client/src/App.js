import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { WorkspaceRoutes } from './WorkspaceRoutes';

import TopBar from './components/layout/TopBar';
import LeftMenu from './components/layout/LeftMenu';
import Workspace from './components/layout/Workspace';

import './components/layout/layout.css';
import 'bulma/css/bulma.css';

function App() {
  return (
    <div id="app">
      <Router>
        {/* <TopBar title="Project" /> */}
        <LeftMenu />
        <Workspace>
          <WorkspaceRoutes />
        </Workspace>
      </Router>
    </div>
  );
}

export default App;
