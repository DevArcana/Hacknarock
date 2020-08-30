import React from "react";
import AppBar from "@material-ui/core/AppBar";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import styled from "styled-components";
import Box from "@material-ui/core/Box";
import theme from "../../../theme";
import AnnouncementOutlinedIcon from "@material-ui/icons/AnnouncementOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useHistory, useLocation } from "react-router-dom";
import { logOut } from "../../../authentication/StupidAuth";
import "./NavBar.css";
export default function NavBar(props) {
  const history = useHistory();

  const location = useLocation();
  const locpath = location.pathname;
  const handleChange = (event, newValue) => {
    console.log(newValue);
  };
  const getValues = () => {
    if (locpath === "/helper") return 0;
    if (locpath === "/helper/help") return 1;
  };

  //TODO change to global routing paths
  return (
    <CustomAppBar>
      <BottomNavigationBox clone>
        <BottomNavigation
          value={getValues()}
          onChange={handleChange}
          showLabels
        >
          <BottomNavigationAction
            label="Help"
            value={0}
            icon={<AnnouncementOutlinedIcon />}
            onClick={() => history.push("/helper")}
          />
          <BottomNavigationAction
            label="People I'm helping"
            value={1}
            icon={<AccountCircleIcon />}
            onClick={() => history.push("/helper/help")}
          />
          <BottomNavigationAction
            label="Log out"
            value="logout"
            icon={<ExitToAppIcon />}
            onClick={() => {
              logOut();
              history.push("/login");
            }}
          />
        </BottomNavigation>
      </BottomNavigationBox>
    </CustomAppBar>
  );
}

const CustomAppBar = styled(AppBar)`
  top: auto;
  bottom: 0;
`;

const BottomNavigationBox = styled(Box)`
  background: ${theme.palette.primary.main};
`;
