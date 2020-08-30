import React from "react";
import { CardContent, Typography, IconButton } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import styled from "styled-components";
import Box from "@material-ui/core/Box";
import Moment from "react-moment";
import PhoneInTalkOutlinedIcon from "@material-ui/icons/PhoneInTalkOutlined";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import theme from "../../../theme";
import "moment-timezone";
import moment from "moment";
import axios from "axios";
import routes from "../../../routes";
import Divider from "@material-ui/core/Divider";

const HelpRequest = (props) => {
  const { post } = props;
  const time = post.submittedAt;

  const datePipe = () => {
    return <Moment format="MM/DD HH:mm">{moment(time).add(2, "hours")}</Moment>;
  };

  const onDelete = async () => {
    await axios.delete(`${routes.api.requests}/${post.id}`);
    window.location.reload(false);
  };

  return (
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
        <Divider />
        <Box mb={1} />
        {post.offers[0] !== undefined ? (
          <ContactBox>
            <Box>
              <Typography variant="h5">{post.offers[0]?.firstName}</Typography>
              <Typography>Wants to help you!</Typography>
            </Box>
            <IconButton onClick={onDelete}>
              <DeleteOutlined />
            </IconButton>
            <PhoneBox clone>
              <a href={"tel:" + post.offers[0]?.phoneNumber}>
                <PhoneInTalkOutlinedIcon />
              </a>
            </PhoneBox>
          </ContactBox>
        ) : (
          <NotFoundBox>
            <Box
              style={{
                display: "flex",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Typography color="textSecondary">No help offers yet</Typography>
            </Box>
            <IconButton onClick={onDelete}>
              <DeleteOutlined />
            </IconButton>
          </NotFoundBox>
        )}
      </CardContent>
    </PostCard>
  );
};

const PostCard = styled(Card)`
  margin: 18px 10px 13px;
`;

const SubtitlesBox = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

const NotFoundBox = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

const PhoneBox = styled(Box)`
  margin-top: 1rem;
  margin-right: 1rem;
  color: ${theme.palette.primary.main};
`;

const ContactBox = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

export default HelpRequest;
