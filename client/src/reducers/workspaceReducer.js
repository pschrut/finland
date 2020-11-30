const INITIAL_STATE = {
  showRightMenu: true
}

const workspaceReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'OPEN_RIGHT_MENU':
      return { ...state, showRightMenu: true }
    case 'CLOSE_RIGHT_MENU':
      return { ...state, showRightMenu: false }
    default:
      return state;
  }
}

export default workspaceReducer;