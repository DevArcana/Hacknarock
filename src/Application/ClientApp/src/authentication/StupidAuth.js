// StupidAuth(tm) by Piotr, you're welcome

import axios from "axios";
import ls from "local-storage";
import routes from "../routes";

let user = ls.get("user");

if (user !== null) {
  axios.defaults.headers.common["Phone-Number"] = user.phoneNumber;
}

const isAuthenticated = () => user !== null;

const logOut = () => {
  user = null;
  ls.set("user", user);
}

const createUser = async (phoneNumber, firstName, lastName) => {
  try {
    const response = await axios.post(`${routes.api.users}`, {
      phoneNumber,
      firstName,
      lastName,
    });
    user = response.data;
    axios.defaults.headers.common["Phone-Number"] = user.phoneNumber;
  } catch {
    user = null;
  } finally {
    ls.set("user", user);
    return user;
  }
};

const authenticate = async (phoneNumber) => {
  try {
    const response = await axios.get(`${routes.api.users}/${phoneNumber}`);
    user = response.data;
    axios.defaults.headers.common["Phone-Number"] = user.phoneNumber;
  } catch {
    user = null;
  } finally {
    ls.set("user", user);
    return user;
  }
};

const getUser = () => user;

export { isAuthenticated, createUser, authenticate, getUser, logOut };
