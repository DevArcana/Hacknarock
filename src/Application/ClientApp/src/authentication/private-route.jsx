import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component, isAuthenticated, ...args }) => (
  <>
    {isAuthenticated ? (
      <Route component={component} {...args} />
    ) : (
      <Redirect to="/login" />
    )}
  </>
);

export default PrivateRoute;
