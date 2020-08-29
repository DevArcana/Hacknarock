import React from "react";
import AppBar from "@material-ui/core/AppBar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FolderIcon from "@material-ui/icons/Folder";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import styled from "styled-components";
import Box from "@material-ui/core/Box";
import theme from "../../theme";
import AnnouncementOutlinedIcon from "@material-ui/icons/AnnouncementOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="up" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function BottomNav(props) {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <HideOnScroll {...props}>
      <CustomAppBar>
        <BottomNavigationBox clone>
          <BottomNavigation value={value} onChange={handleChange} showLabels>
            <IconBox clone>
              <BottomNavigationAction
                label="Help"
                value="help"
                icon={<AnnouncementOutlinedIcon />}
              />
            </IconBox>
            <IconBox clone>
              <BottomNavigationAction
                label="People I'm helping"
                value="helping"
                icon={<AccountCircleIcon />}
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
    </HideOnScroll>
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
