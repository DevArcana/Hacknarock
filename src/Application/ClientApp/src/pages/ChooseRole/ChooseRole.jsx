import React from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { Box } from "@material-ui/core";
import styled from "styled-components";
const ChooseRole = (props) => {
  const history = useHistory();

  return (
    <>
      <ButtonBox>
        <Button
          onClick={() => history.push("/helper")}
          variant="contained"
          color="primary"
        >
          Helper
        </Button>
        <Button
          onClick={() => history.push("/helpee")}
          variant="contained"
          color="secondary"
        >
          Helpee
        </Button>
      </ButtonBox>
    </>
  );
};

const ButtonBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-content: center;
`;
export default ChooseRole;
