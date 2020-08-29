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

// import { authenticate, getUser, createUser, isAuthenticated } from './authentication/StupidAuth';

// const auth = async () => {
//   if (await authenticate('phone number goes here')) {
//     console.log("Successfully logged in.")
//     console.log(getUser());
//   } else {
//     console.log('No such user! Creating one.');

//     await createUser('phone number goes here', 'name goes here', 'surname goes here');

//     if (isAuthenticated()) {
//       console.log("Created new user.")
//       console.log(getUser());
//     } else {
//       console.log("Well, fuck you too.");
//     }
//   }
// }

// auth();


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
