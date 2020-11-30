import { OUTCOME, INCOME } from '../helpers/info.fixture';

const INITIAL_STATE = { OUTCOME, INCOME };

const recordsReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_OUTCOME_RECORD':
      return { ...state, OUTCOME: [...state.OUTCOME, action.payload] }
    case 'ADD_INCOME_RECORD':
      return { ...state, INCOME: [...state.INCOME, action.payload] }
    default:
      return state;
  }
}

export default recordsReducer;