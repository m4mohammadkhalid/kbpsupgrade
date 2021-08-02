import React, { useState, useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import HomePage from "./pages/HomePage";
import IndexGallery from "./components/Home/Gallery/IndexGallery";
import AboutIndex from "./components/Home/AboutPage/AboutIndex";
import IndexContact from "./components/Home/Contact/IndexContact";

import Login from "./components/Home/Login/Login";
import SideBar from "./components/Admin/SideBar/SideBar";
import EducationAdmin from "./pages/EducationAdmin";
import { ToastContainer } from "react-toastify";
import history from "./shared/history";
import SecureRoute from "./shared/SecureRoute";
import ExperienceAdmin from "./pages/ExperienceAdmin";
import SkillAdmin from "./pages/SkillAdmin";
import MessageAdmin from "./pages/MessageAdmin";
import isLogin from "./shared/authorization";
import ProjectAdmin from "./pages/ProjectAdmin";
import NotFound from "./pages/NotFound";
import EventIndex from "./components/Home/Event/EventIndex";
import FacilityIndex from "./components/Home/Facility/FacilityIndex";

function App() {
  const [isLogged, setIsLogged] = useState(isLogin);
  const login = useSelector((state) => state.login.isLogin);

  useEffect(() => {
    setIsLogged(isLogin);
  }, [login]);

  return (
    <div className="App">
      <Router history={history}>
        {isLogged && <SideBar />}
        <Switch>
          <Route path="/login" exact component={Login} />
          <SecureRoute path="/education" exact component={EducationAdmin} />
          <SecureRoute path="/experience" exact component={ExperienceAdmin} />
          <SecureRoute path="/project" exact component={ProjectAdmin} />
          <SecureRoute path="/skill" exact component={SkillAdmin} />
          <SecureRoute path="/messages" exact component={MessageAdmin} />
          <Route path="/" exact component={HomePage} />
          <Route path="/gallery" exact component={IndexGallery} />
          <Route path="/about" exact component={AboutIndex} />
          <Route path="/contact" exact component={IndexContact} />
          <Route path="/event" exact component={EventIndex} />
          <Route path="/facility" exact component={FacilityIndex} />

          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
