import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AdminIndex from './backend/AdminIndex';
import HomeIndex from './frontend/HomeIndex'
import Student from './backend/components/Student'
import StudentDetails from './backend/components/StudentDetails'

export const Routes = () => {
  return (
    <>
     
      <Switch>
        <Route exact path="/" component={HomeIndex} />
        <Route exact path="/">
          <Redirect to="/" />
        </Route>

        <Route exact path="/admin" component={AdminIndex} />
        <Route exact path="/student" component={Student} />
        <Route exact path="/studentdetails" component={StudentDetails} />
      </Switch>
     
    </>
  );
};