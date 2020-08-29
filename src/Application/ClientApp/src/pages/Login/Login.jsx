import React from "react";
import { Typography, Box, Button } from "@material-ui/core";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

export const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Box m={10}>
      <Box align={"center"}>
        <TitleTypography variant="h1">NOTES</TitleTypography>
      </Box>
      <ButtonBox>
        <LoginButton
          onClick={() => loginWithRedirect()}
          color="primary"
          variant="contained"
          size="large"
        >
          Login
        </LoginButton>
      </ButtonBox>
    </Box>
  );
};

const TitleTypography = styled(Typography)`
  color: #7c98b3;
`;

const ButtonBox = styled(Box)`
  display: flex;
  justify-content: center;
`;

const LoginButton = styled(Button)`
  margin-top: 400px;
`;
