import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomeIndex from './frontend/HomeIndex'
export const Routes = () => {
  return (
    <>
     
      <Switch>
        <Route exact path="/" component={HomeIndex} />
        <Route exact path="/">
          <Redirect to="/" />
        </Route>

      </Switch>
     
    </>
  );
};