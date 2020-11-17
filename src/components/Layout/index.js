import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Aux from '../_Aux';
import routesUnprotected from '../../routes-unprotected';
import AddDashboardModal from '../Modal/AddDashboardModal';
import Loader from './Loader';
import { SideBar } from './SideBar/SideBar';
import { Header } from './Header/Header';

function AppLayout() {
  const menu = routesUnprotected.map((route, index) => (route.component ? (
    <Route
      key={index}
      path={route.path}
      exact={route.exact}
      name={route.name}
      render={(props) => <route.component {...props} />}
    />
  ) : null));

  return (
    <Aux>
      <Suspense fallback={<Loader />}>
        <SideBar />
        <div className="main-container">
          <Header />
          <AddDashboardModal />
          <div className="inner-content">
            <Switch>
              {menu}
            </Switch>
          </div>
        </div>
      </Suspense>
    </Aux>
  );
}

export default AppLayout;
