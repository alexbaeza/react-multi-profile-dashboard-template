import React from 'react';

const Dashboard = React.lazy(() => import('./pages/Dashboard/Dashboard'));
const Home = React.lazy(() => import('./pages/Home/Home'));
const Error = React.lazy(() => import('./pages/ErrorPage/ErrorPage'));

const routesUnprotected = [
  {
    path: '/',
    exact: true,
    name: 'Home Page',
    component: Home,
  },
  {
    path: '/home',
    exact: true,
    name: 'Home Page',
    component: Home,
  },
  {
    path: '/dashboard/:id',
    exact: true,
    name: 'Dashboard Page',
    component: Dashboard,
  },
  {
    path: '*',
    exact: true,
    name: 'Error Page',
    component: Error,
  },
];

export default routesUnprotected;
