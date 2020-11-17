import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Aux from '../_Aux';
import Loader from '../Layout/Loader';

import 'font-awesome/scss/font-awesome.scss';
import './index.scss';

const AppLayout = React.lazy(() => import('./../Layout'));

function App() {
  return (
    <Aux>
      <Suspense fallback={<Loader />}>
        <Router>
          <Switch>
            <Route
              path="/"
              component={AppLayout}
            />
          </Switch>
        </Router>
      </Suspense>
    </Aux>
  );
}

export default App;
