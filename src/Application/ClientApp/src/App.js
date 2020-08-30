import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./pages/Auth/Login";
import { Home as HelperHome } from "./pages/Helper/Home/Home";
import MyHelpOffers from "./pages/Helper/MyHelpOffers/MyHelpOffers";
import MyHelpRequests from "./pages/Helpee/MyHelpRequests/MyHelpRequests";
import { AddNewRequest } from "./pages/Helpee/AddNewRequest/AddNewRequest";
import ChooseRole from "./pages/ChooseRole/ChooseRole";
import routes from "./routes";
import Signup from "./pages/Auth/Signup";

function App() {
  return (
    <Switch>
      <Route path={routes.pages.login} component={Login} />
      <Route path={routes.pages.signup} component={Signup} />

      {/*<PrivateRoute*/}
      {/*  path="/help"*/}
      {/*  component={MyHelpOffers}*/}
      {/*  isAuthenticated={isAuthenticated}*/}
      {/*/>*/}
      {/*<PrivateRoute*/}
      {/*  path="/addrequest"*/}
      {/*  component={HelpeeHome}*/}
      {/*  isAuthenticated={isAuthenticated}*/}
      {/*/>*/}
      {/*<PrivateRoute*/}
      {/*  path="/"*/}
      {/*  component={HelperHome}*/}
      {/*  isAuthenticated={isAuthenticated}*/}
      {/*/>*/}
      <Route path={routes.pages.helpee.requests} component={MyHelpRequests} />
      <Route path={routes.pages.helpee.home} component={AddNewRequest} />
      <Route path={routes.pages.helper.help} component={MyHelpOffers} />
      <Route path={routes.pages.helper.home} component={HelperHome} />
      <Route path={routes.pages.chooseRole} component={ChooseRole} />
    </Switch>
  );
}

export default App;
