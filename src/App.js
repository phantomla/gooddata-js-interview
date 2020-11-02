// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import "@gooddata/react-components/styles/css/main.css";

import routes from './routes';

const loading = () => (
  <div />
);

const App = () =>  {
  return (
    <div className="App">
      {/* You can define router here to create pages */}
      <BrowserRouter>
        <React.Suspense fallback={loading()}>
          <Switch>
            {
              routes.map((item, index) => {
                return <Route key={`route${index}`} exact path={item.path} component={item.component} />;
              })
            }
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    </div>
  );
}

export default React.memo(App);
