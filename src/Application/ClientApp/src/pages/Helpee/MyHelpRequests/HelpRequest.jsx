import React from "react";
import { CardContent, Typography, CardActions, IconButton } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import styled from "styled-components";
import Box from "@material-ui/core/Box";
import Moment from "react-moment";
import PhoneInTalkOutlinedIcon from "@material-ui/icons/PhoneInTalkOutlined";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import EditOutlined from "@material-ui/icons/EditOutlined";
import theme from "../../../theme";
import "moment-timezone";
import moment from "moment";
import { useState } from "react";
import axios from "axios";
import routes from "../../../routes";
// import { useHistory } from "react-router-dom";

const HelpRequest = (props) => {
  const { post } = props;
  const time = post.submittedAt;
  // const history = useHistory();

  const [isEditable, setIsEditable] = useState(false);

  const datePipe = () => {
    return <Moment format="MM/DD HH:mm">{moment(time).add(2, "hours")}</Moment>;
  };

  const onDelete = async () => {
    await axios.delete(`${routes.api.requests}/${post.id}`);
    // TODO: Reload list
    window.location.reload(false);
  }

  const onSetEditable = () => {
    setIsEditable(!isEditable);
  }

  const editable = () => {
    return (
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
              <Typography variant="h5">{post.offers[0]?.firstName}</Typography>
              <Typography>Wants to help you!</Typography>
            </Box>
            <PhoneBox clone>
              <a href={"tel:" + post.offers[0]?.phoneNumber}>
                <PhoneInTalkOutlinedIcon />
              </a>

              <PhoneInTalkOutlinedIcon />
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
    );
  };

  const notEditable = () => {
    return (
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
              <Typography variant="h5">{post.offers[0]?.firstName}</Typography>
              <Typography>Wants to help you!</Typography>
            </Box>
            <PhoneBox clone>
              <a href={"tel:" + post.offers[0]?.phoneNumber}>
                <PhoneInTalkOutlinedIcon />
              </a>

              <PhoneInTalkOutlinedIcon />
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
    );
  };

  return (
    <PostCard>
      {isEditable ? editable() : notEditable()}

      <CardActions>
        <IconButton onClick={onDelete}>
          <DeleteOutlined />
        </IconButton>
        <IconButton onClick={onSetEditable}>
          <EditOutlined />
        </IconButton>
      </CardActions>
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
