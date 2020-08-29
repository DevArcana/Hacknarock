import React, { useEffect, useState } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import axios from "axios";

const CustomAuth0Provider = ({ children }) => {
  const [state, setState] = useState({
    audience: "https://devmountain-hacknarock.herokuapp.com/api/",
    clientId: "q7wK2B3A8wieZ3PSP4Ok5P216PpehM85",
    domain: "young-firefly-0292.eu.auth0.com",
  });

  useEffect(() => {
    if (localStorage.getItem("isAuth")) {
      const fetchData = async () => {
        const result = await axios(
          `${window.location.origin}/api/rest/configuration`
        );
        setState(result.data.auth0);
        localStorage.setItem("isAuth", true);
      };
      fetchData();
    }
  }, []);

  return (
    <Auth0Provider
      domain={state.domain}
      clientId={state.clientId}
      audience={state.audience}
      redirectUri={window.location.origin}
    >
      {children}
    </Auth0Provider>
  );
};

export default CustomAuth0Provider;
