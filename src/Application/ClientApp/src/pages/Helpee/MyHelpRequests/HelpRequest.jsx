import React from "react";
import { CardContent, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import styled from "styled-components";
import Box from "@material-ui/core/Box";
import Moment from "react-moment";
import PhoneInTalkOutlinedIcon from "@material-ui/icons/PhoneInTalkOutlined";
import theme from "../../../theme";
import {Linking} from 'react-native'

const HelpRequest = (props) => {
  const { post } = props;

  const datePipe = () => {
    return <Moment format="MM/DD HH:mm">{post.submittedAt}</Moment>;
  };


  return (
    <>
      <PostCard>
        <CardContent>
          <SubtitlesBox>
            <Typography color="textSecondary" variant="subtitle2">
              {post.title}
            </Typography>
            <Typography>{datePipe()}</Typography>
          </SubtitlesBox>
          <Typography color="textSecondary">{post.description}</Typography>
          <Box mb={3} />
          <ContactBox>
            <Box>
              <Typography variant="h5">{post.offers[0]?.firstName}</Typography>
              <Typography >Wants to help you!</Typography>
            </Box>
            <PhoneBox onClick={Linking.openURL(`tel:${post.offers[0]?.phoneNumbe}`)} clone>
              <PhoneInTalkOutlinedIcon />
            </PhoneBox>
          </ContactBox>
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
