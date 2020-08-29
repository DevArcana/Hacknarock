import React from "react";
import { useHistory } from "react-router-dom";
import {
  Box,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";
import styled from "styled-components";
import Card from "@material-ui/core/Card";

const helpSomeone = require("../../assets/undraw_gone_shopping_vwmc.svg");
const getHelp = require("../../assets/undraw_to_do_list_a49b.svg");
const imageSize = 14;

const ChooseRole = () => {
  const history = useHistory();

  return (
    <ContentBox>
      <Box>
        <DescriptionBox>
          <Typography>I would like to help</Typography>
          <Typography>I need help</Typography>
        </DescriptionBox>
        <ChoiceBox>
          <ChoiceCard>
            <CardActionArea>
              <CardContent>
                <img
                  alt="logo"
                  style={{
                    height: `${imageSize - 2}rem`,
                    width: `${imageSize - 2}rem`,
                  }}
                  src={String(helpSomeone)}
                  onClick={() => history.push("/helper")}
                />
              </CardContent>
            </CardActionArea>
          </ChoiceCard>
          <ChoiceCard>
            <CardActionArea>
              <CardContent>
                <img
                  alt="logo"
                  src={String(getHelp)}
                  style={{
                    height: `${imageSize - 2}rem`,
                    width: `${imageSize - 2}rem`,
                  }}
                  onClick={() => history.push("/helpee")}
                />
              </CardContent>
            </CardActionArea>
          </ChoiceCard>
        </ChoiceBox>
      </Box>
    </ContentBox>
  );
};

const ContentBox = styled(Box)`
  margin-top: 12rem;
`;

const ChoiceBox = styled(Box)`
  display: flex;
  justify-content: center;
`;

const DescriptionBox = styled(Box)`
  justify-content: space-between;
  display: flex;
  margin-left: 3.2rem;
  margin-right: 5rem;
`;
const ChoiceCard = styled(Card)`
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  height: ${imageSize}rem;
  width: ${imageSize}rem;
`;

export default ChooseRole;
