import React from 'react';
import { Redirect, useParams } from 'react-router';
import Aux from '../../components/_Aux';
import { useGlobalState } from '../../store/GlobalState';
import appState from '../../store/app-state';

function Dashboard() {
  const { id } = useParams();

  const [dashboardItems] = useGlobalState(appState, (state) => state.dashboardItems);

  const currentDashboard = dashboardItems.get(id);
  if (!currentDashboard) {
    return <Redirect to="/error" />;
  }
  return (
    <Aux>
      <div>
        <p>Active dashboard: {id}</p>
        <p>Dashboard identifier: {currentDashboard.id || null}</p>
        <p>Dashboard title: {currentDashboard.title || null}</p>
        <p>Dashboard url: {currentDashboard.url || null}</p>
      </div>
    </Aux>
  );
}

export default Dashboard;
