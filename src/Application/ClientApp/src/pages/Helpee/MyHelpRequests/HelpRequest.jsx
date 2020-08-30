import React from "react";
import { CardContent, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import styled from "styled-components";
import Box from "@material-ui/core/Box";
import Moment from "react-moment";
import PhoneInTalkOutlinedIcon from "@material-ui/icons/PhoneInTalkOutlined";
import theme from "../../../theme";
import "moment-timezone";
import moment from "moment";

const HelpRequest = (props) => {
  const { post } = props;
  const time = post.submittedAt;

  const datePipe = () => {
    return <Moment format="MM/DD HH:mm">{moment(time).add(2, "hours")}</Moment>;
  };

  return (
    <>
      <PostCard>
        <CardContent style={{ wordWrap: "break-word" }}>
          <SubtitlesBox>
            <Typography color="textSecondary" variant="subtitle2">
              {post.title}
            </Typography>
            <Typography>{datePipe()}</Typography>
          </SubtitlesBox>
          <Typography color="textSecondary">{post.description}</Typography>
          <Box mb={3} />
          {post.offers[0] !== undefined ? (
            <ContactBox>
              <Box>
                <Typography variant="h5">
                  {post.offers[0]?.firstName}
                </Typography>
                <Typography>Wants to help you!</Typography>
              </Box>
              <PhoneBox clone>
                <a href={"tel:" + post.offers[0]?.phoneNumber}>
                  <PhoneInTalkOutlinedIcon />
                </a>
              </PhoneBox>
            </ContactBox>
          ) : (
            <NotFoundBox>
              <Typography color="textSecondary">
                NOBODY WANTS TO HELP YOU
              </Typography>
            </NotFoundBox>
          )}
        </CardContent>
      </PostCard>
    </>
  );
};

const PostCard = styled(Card)`
  margin: 18px 10px 13px;
`;

const SubtitlesBox = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

const NotFoundBox = styled(Box)``;

const PhoneBox = styled(Box)`
  margin-top: 2rem;
  margin-right: 1rem;
  color: ${theme.palette.primary.main};
`;

const ContactBox = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

export default HelpRequest;
