import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AdminIndex from './backend/AdminIndex';
import HomeIndex from './frontend/HomeIndex'
import Student from './backend/Pages/Student'
import StudentDetails from './backend/Pages/StudentDetails'
import Login from './backend/Pages/Login';
import Register from './backend/Pages/Register';

export const Routes = () => {
  return (
    <>
     
      <Switch>
        <Route exact path="/" component={HomeIndex} />
        <Route exact path="/">
          <Redirect to="/" />
        </Route>

         {/* admin panel */}
        <Route exact path="/dashboard" component={AdminIndex} />
        <Route exact path="/student" component={Student} />
        <Route exact path="/studentdetails" component={StudentDetails} />
        <Route exact path="/admin" component={Login} />
        <Route exact path="/register" component={Register} />


      </Switch>
     
    </>
  );
};