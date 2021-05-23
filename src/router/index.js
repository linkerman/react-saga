import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { HomePage } from '../pages/';

const index = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default index;
