import React from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "./authentication/private-route";
import { useAuth0 } from "@auth0/auth0-react";
import { Route } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Loading } from "./pages/Loading/Loading";
import Error from "./pages/Error/Error";
import { Home as HelperHome } from "./pages/Helper/Home/Home";
import MyHelpOffers from "./pages/Helper/MyHelpOffers/MyHelpOffers";
import { Home as HelpeeHome } from "./pages/Helpee/Home/Home";

function App() {
  const { isLoading, error, isAuthenticated } = useAuth0();

  if (error) {
    return <Error error={error} />;
  }
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <PrivateRoute
        path="/testAuth"
        component={Error}
        isAuthenticated={isAuthenticated}
      />

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
      <Route path="/help" component={MyHelpOffers} />
      <Route path="/addrequest" component={HelpeeHome} />
      <Route path="/" component={HelperHome} />
    </Switch>
  );
}

export default App;
