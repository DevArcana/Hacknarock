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

export default function NavBar(props) {
  const history = useHistory();

  const location = useLocation();
  const locpath = location.pathname;
  const handleChange = (event, newValue) => {
    console.log(newValue);
  };
  const getValues = () => {
    if (locpath === "/") return 0;
    if (locpath === "/help") return 1;
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
          <IconBox clone>
            <BottomNavigationAction
              label="Help"
              value="0"
              icon={<AnnouncementOutlinedIcon />}
              onClick={() => history.push("/")}
            />
          </IconBox>
          <IconBox clone>
            <BottomNavigationAction
              label="People I'm helping"
              value="1"
              icon={<AccountCircleIcon />}
              onClick={() => history.push("/help")}
            />
          </IconBox>
          <IconBox clone>
            <BottomNavigationAction
              label="Log out"
              value="logout"
              icon={<ExitToAppIcon />}
            />
          </IconBox>
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

const IconBox = styled(Box)`
  .Mui-selected {
    color: ${theme.palette.background.default};
  }

  .MuiBottomNavigationAction-root .Mui-selected {
    color: ${theme.palette.background.default};
  }
`;
