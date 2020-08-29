import React from "react";
import AppBar from "@material-ui/core/AppBar";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import styled from "styled-components";
import Box from "@material-ui/core/Box";
import theme from "../../theme";
import AnnouncementOutlinedIcon from "@material-ui/icons/AnnouncementOutlined";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useHistory, useLocation } from "react-router-dom";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

export default function BottomNavHelpee(props) {
  const history = useHistory();

  const location = useLocation();
  const locpath = location.pathname;
  const handleChange = (event, newValue) => {
    console.log(newValue)
  };
  const getValues = () => {
    if(locpath==="/myhelprequests")
      return 0
    if(locpath==="/addrequest")
      return 1
  }

  //TODO change to global routing paths
  return (
    <CustomAppBar>
      <BottomNavigationBox clone>
        <BottomNavigation value={getValues()} onChange={handleChange} showLabels>
          <IconBox clone>
            <BottomNavigationAction
              label="Help"
              value="0"
              icon={<AnnouncementOutlinedIcon />}
              onClick={() => history.push("/myhelprequests")}
            />
          </IconBox>
          <IconBox clone>
            <BottomNavigationAction
              label="People I'm helping"
              value="1"
              icon={<AddCircleOutlineIcon />}
              onClick={() => history.push("/addrequest")}
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
