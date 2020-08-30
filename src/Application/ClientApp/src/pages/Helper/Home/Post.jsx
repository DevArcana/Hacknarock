import React from "react";
import { CardContent, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Moment from "react-moment";

import { useHistory } from "react-router-dom";
import routes from "../../../routes";
import axios from "axios";
import moment from "moment";

const Post = (props) => {
  const { post } = props;
  let history = useHistory();
  const time = post.submittedAt;

  const datePipe = () => {
    return <Moment format="MM/DD HH:mm">{moment(time).add(2, "hours")}</Moment>;
  };

  const clickHelp = async () => {
    await axios.post(`${routes.api.requests}/${post.id}`, { accept: true });
    history.push(routes.pages.helper.help);
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
          <TitleTypography variant="h5">{post.submitter}</TitleTypography>
          <Typography color="textSecondary" noWrap>
            {post.description}
          </Typography>
          <ButtonBox>
            <Button variant="contained" color="primary" onClick={clickHelp}>
              OFFER HELP
            </Button>
          </ButtonBox>
        </CardContent>
      </PostCard>
    </>
  );
};

const PostCard = styled(Card)`
  margin: 18px 10px 13px;
`;

const ButtonBox = styled(Box)`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 1rem;
`;

const SubtitlesBox = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

const TitleTypography = styled(Typography)`
  margin-bottom: 6px;
`;

export default Post;
