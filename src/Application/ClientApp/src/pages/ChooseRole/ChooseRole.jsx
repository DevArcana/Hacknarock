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
import routes from "../../routes";

const helpSomeone = require("../../assets/undraw_gone_shopping_vwmc.svg");
const getHelp = require("../../assets/undraw_to_do_list_a49b.svg");
const imageSize = 14;

const ChooseRole = () => {
  const history = useHistory();

  return (
    <ContentBox>
      <Box>
        <ChoiceBox>
          <BoxAndText>
            <Typography style={{ marginLeft: "3.5rem" }}>
              I would like to help
            </Typography>
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
                    onClick={() => history.push(routes.pages.helper.home)}
                  />
                </CardContent>
              </CardActionArea>
            </ChoiceCard>
          </BoxAndText>
          <BoxAndText>
            <Typography style={{ marginLeft: "5rem" }}>I need help</Typography>
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
                    onClick={() => history.push(routes.pages.helpee.home)}
                  />
                </CardContent>
              </CardActionArea>
            </ChoiceCard>
          </BoxAndText>
        </ChoiceBox>
      </Box>
    </ContentBox>
  );
};

const ContentBox = styled(Box)`
  margin-top: 12rem;
`;

const BoxAndText = styled(Box)`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ChoiceBox = styled(Box)`
  display: flex;
  justify-content: center;
`;

const ChoiceCard = styled(Card)`
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  height: ${imageSize}rem;
  width: ${imageSize}rem;
`;

export default ChooseRole;
