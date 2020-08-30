import React from "react";
import { Route, Switch, useHistory, Redirect } from "react-router-dom";
import Login from "./pages/Auth/Login";
import { Home as HelperHome } from "./pages/Helper/Home/Home";
import MyHelpOffers from "./pages/Helper/MyHelpOffers/MyHelpOffers";
import MyHelpRequests from "./pages/Helpee/MyHelpRequests/MyHelpRequests";
import { AddNewRequest } from "./pages/Helpee/AddNewRequest/AddNewRequest";
import ChooseRole from "./pages/ChooseRole/ChooseRole";
import routes from "./routes";
import Signup from "./pages/Auth/Signup";
import { isAuthenticated } from './authentication/StupidAuth';

function App() {
  const history = useHistory();

  return (
    <>
      {!isAuthenticated() && history.location.pathname !== "/signup" ? <Redirect to="login"></Redirect> : <></>}
      <Switch>
        <Route path={routes.pages.login} component={Login} />

        <Route path={routes.pages.signup} component={Signup} />

        <Route path={routes.pages.helpee.home} component={AddNewRequest} />
        <Route path={routes.pages.helpee.requests} component={MyHelpRequests} />
        <Route path={routes.pages.helper.help} component={MyHelpOffers} />
        <Route path={routes.pages.helper.home} component={HelperHome} />
        <Route path={routes.pages.chooseRole} component={ChooseRole} />
      </Switch>
    </>
  );
}

export default App;
