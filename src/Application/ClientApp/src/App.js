import React from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "./authentication/private-route";
import { useAuth0 } from "@auth0/auth0-react";

import { Loading } from "./pages/Loading/Loading";
import Error from "./pages/Error/Error";
import Home from "./pages/Helper/Home/Home";
import MyHelpOffers from "./pages/Helper/MyHelpOffers/MyHelpOffers";

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
      {/* <Route path="/login" component={Login} />*/}
      {/*<PrivateRoute*/}
      {/*  path="/"*/}
      {/*  component={Home}*/}
      {/*  isAuthenticated={isAuthenticated} */}
      {/*/> */}
      <PrivateRoute path="/myhelpoffers" component={MyHelpOffers} isAuthenticated={isAuthenticated} />
      <PrivateRoute path="/" component={Home} isAuthenticated={isAuthenticated} />
    </Switch>
  );
}

export default App;
