import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./authentication/private-route";
import { useAuth0 } from "@auth0/auth0-react";
import { Login } from "./pages/Login/Login";
import { Loading } from "./pages/Loading/Loading";
import Error from "./pages/Error/Error";
import { Home as HelperHome } from "./pages/Helper/Home/Home";
import MyHelpOffers from "./pages/Helper/MyHelpOffers/MyHelpOffers";
import MyHelpRequests from "./pages/Helpee/MyHelpRequests/MyHelpRequests";
import { AddNewRequest } from "./pages/Helpee/AddNewRequest/AddNewRequest";
import ChooseRole from "./pages/ChooseRole/ChooseRole";

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
      <Route path="/helpee/helprequests" component={MyHelpRequests} />
      <Route path="/helpee" component={AddNewRequest} />
      <Route path="/helper/help" component={MyHelpOffers} />
      <Route path="/helper" component={HelperHome} />
      <Route path="/" component={ChooseRole} />
    </Switch>
  );
}

export default App;
