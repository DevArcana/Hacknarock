import React from "react";
import { CardContent, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const Post = (props) => {
  const { post } = props;
  return (
    <>
      <PostCard>
        <CardContent>
          <SubtitlesBox>
            <Typography color="textSecondary" variant="subtitle2">Looks for help</Typography>
            <Typography>{post.createdAt}</Typography>
          </SubtitlesBox>
          <TitleTypography variant="h5">{post.title}</TitleTypography>
          <Typography color="textSecondary" noWrap>{post.description}</Typography>
          <ButtonBox>
            <Button variant="contained" color="primary">
              Details
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
