import { combineReducers } from 'redux';
import workspaceReducer from './workspaceReducer';
import recordsReducer from './recordsReducer';

const rootReducer = combineReducers({
  workspaceReducer,
  recordsReducer
});

export default rootReducer;
