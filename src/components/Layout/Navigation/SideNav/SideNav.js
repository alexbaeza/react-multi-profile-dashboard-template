import React, { useState } from 'react';
import { useLocation } from 'react-router';
import NavItem from '../NavItem/NavItem';
import { useGlobalState } from '../../../../store/GlobalState';
import appState from '../../../../store/app-state';

function SideNav() {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  const [state, dispatch] = useGlobalState(appState, (state) => state);


  const onItemClick = (path) => {
    setActivePath(path);
  };

  const navigationItems = Array.from(state.dashboardItems.values());

  return (
    <div className="sidenav">
      <NavItem
        key="home"
        path="/home"
        title="Home Page"
        onItemClick={onItemClick}
        active={activePath === '/home'}
        icon="fa fa-home"
        button
      />
      {
        navigationItems.map((item, index) => (
          <NavItem
            key={index}
            path={item.url}
            title={item.title}
            onItemClick={onItemClick}
            active={item.url === activePath}
          />
        ))
      }
      <NavItem
        key="add-new"
        title="Add new Dashboard"
        onItemClick={() => dispatch('showAddDashboardModal')}
        icon="fa fa-plus"
        button
      />
    </div>
  );
}

export default SideNav;
