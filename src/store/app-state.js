import GlobalState from './GlobalState';

const darkTheme = {
  name: 'dark',
  background: 'black',
  text: 'white',
};

const lightTheme = {
  name: 'light',
  background: 'white',
  text: 'black',
};

const dashboardItems = [
  ['user-one', {
    id: 'user-one',
    title: 'User One',
    url: '/dashboard/user-one',
  }],
  ['user-two', {
    id: 'user-two',
    title: 'User Two',
    url: '/dashboard/user-two',
  }],
];

function reducer(state, actionName, payload) {
  switch (actionName) {
  case 'toggleTheme': {
    return {
      ...state,
      theme: state.theme.name === 'light' ? darkTheme : lightTheme,
    };
  }
  case 'showAddDashboardModal': {
    return {
      ...state,
      showAddDashboardModal: !state.showAddDashboardModal,
    };
  }
  case 'addDashboardItem': {
    const newDashboardItems = new Map([...state.dashboardItems, ...payload]);
    return {
      ...state,
      dashboardItems: newDashboardItems,
    };
  }
  default: {
    throw new Error(`Action does not exist: ${actionName}`);
  }
  }
}

const appState = new GlobalState(reducer, {
  theme: lightTheme,
  dashboardItems: new Map(dashboardItems),
  showAddDashboardModal: false,
});

export default appState;
