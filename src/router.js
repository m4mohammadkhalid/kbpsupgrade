import React from 'react';
import {Provider} from "react-redux"
import { Route, Switch, Redirect } from 'react-router-dom';
import AdminIndex from './backend/AdminIndex';
import HomeIndex from './frontend/HomeIndex'
import Student from './backend/Pages/Student'
import StudentDetails from './backend/Pages/StudentDetails'
import Login from './backend/Pages/Login';
import Register from './backend/Pages/Register';
import BlankPage from './backend/Pages/BlankPage';
import AboutIndex from './frontend/AboutPage/AboutIndex';
import IndexGallery from './frontend/Gallery/IndexGallery';
import IndexContact from './frontend/Contact/IndexContact';
import Store from './store';
import PrivateRoute from './private/PrivateRoute';
//import RouteLinks from './private/RouteLinks';
import NotFounds from './compoenets/NotFounds';
import PostCreate from './backend/Pages/PostCreate'
export const Routes = () => {
  return (
    <>
     
      <Switch>
        <Provider store={Store}>
        <Route exact path="/" component={HomeIndex} />
        <Route exact path="/">
          <Redirect to="/" />
        </Route>
        <Route exact path="/about" component={AboutIndex} />
        <Route exact path="/gallery" component={IndexGallery} />
        <Route exact path="/contact" component={IndexContact} />


        
         {/* admin panel */}
        <PrivateRoute exact path="/dashboard" component={AdminIndex} />
        <PrivateRoute exact path="/student" component={Student} />
        <PrivateRoute exact path="/studentdetails" component={StudentDetails} />
        <Route exact path="/admin" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/Blank" component={BlankPage} />
        <PrivateRoute exact path="/create" component={PostCreate} />



        <Route component={NotFounds} />
        </Provider>
      </Switch>
     
    </>
  );
};