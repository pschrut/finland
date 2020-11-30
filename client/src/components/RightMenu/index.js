import React, { useEffect } from 'react';
import { useSelector, useDispatch, useStore } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { closeRightMenu, openRightMenu } from '../../actions';
import { replaceQueryParam, getQueryParam } from '../../helpers';
import './rightMenu.css';

export function RightMenu(props) {
  const { title, children } = props;
  const showRightMenu = useSelector(({ workspaceReducer }) => workspaceReducer.showRightMenu);
  const dispatch = useDispatch();
  let history = useHistory();
  const store = useStore();
  
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const queryValue = store.getState().workspaceReducer.showRightMenu;
      replaceQueryParam(history, "rightMenu", queryValue);
    });

    if (getQueryParam("rightMenu") === "true") {
      dispatch(openRightMenu());
    }

    return () => {
      unsubscribe();
    }
  }, [])

  function _closeRightMenu() {
    dispatch(closeRightMenu());
  }

  return (
    <div id="right__menu" className={ showRightMenu ? 'right__menu_show transition' : 'right__menu_hidden' }>
      <div id="header">
        <h1>{ title }</h1>
        <i className="fas fa-times" onClick={ _closeRightMenu } />
      </div>
      <div id="content">
        { children }
      </div>
    </div>
  )
}
