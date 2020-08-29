import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { Login } from "./pages/Login/Login";
import { Loading } from "./pages/Loading/Loading";
import Error from "./pages/Error/Error";
import PrivateRoute from "./authentication/private-route";
import Home from "./pages/Home/Home";

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
        path="/"
        component={Home}
        isAuthenticated={isAuthenticated}
      />
    </Switch>
  );
}

export default App;
