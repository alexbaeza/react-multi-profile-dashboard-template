import React from 'react';
import { withRouter } from 'react-router-dom';
import SideNav from '../Navigation/SideNav/SideNav';

const RouterSideNav = withRouter(SideNav);

export const SideBar = () => <RouterSideNav />;

