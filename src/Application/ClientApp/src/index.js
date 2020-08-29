import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import "fontsource-roboto";
import { BrowserRouter as Router } from "react-router-dom";
import CustomAuth0Provider from "./authentication/auth0-provider";

ReactDOM.render(
  <Router>
    <CustomAuth0Provider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </CustomAuth0Provider>
  </Router>,
  document.getElementById("root")
);

// I have no clue what React.StrictMode does, I just copied the code above
// from an example project using material ui, have fun

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
