import React from "react";
import AppBar from "@material-ui/core/AppBar";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import styled from "styled-components";
import Box from "@material-ui/core/Box";
import theme from "../../../theme";
import AnnouncementOutlinedIcon from "@material-ui/icons/AnnouncementOutlined";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useHistory, useLocation } from "react-router-dom";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import "./NavBar.css";
import routes from "../../../routes";
export default function NavBar(props) {
  const history = useHistory();

  const location = useLocation();
  const locpath = location.pathname;

  const handleChange = (event, newValue) => {
    console.log(newValue);
  };

  const getValues = () => {
    if (locpath === routes.pages.helpee.requests) return 0;
    if (locpath === routes.pages.helpee.home) return 1;
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
            label="My help requests"
            value={0}
            icon={<AnnouncementOutlinedIcon />}
            onClick={() => history.push(routes.pages.helpee.requests)}
          />
          <BottomNavigationAction
            label="Add request"
            value={1}
            icon={<AddCircleOutlineIcon />}
            onClick={() => history.push(routes.pages.helpee.home)}
          />
          <BottomNavigationAction
            label="Log out"
            value="logout"
            icon={<ExitToAppIcon />}
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
