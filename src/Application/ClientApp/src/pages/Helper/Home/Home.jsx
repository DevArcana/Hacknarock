import React from "react";
import { Typography } from "@material-ui/core";
import Post from "./Post";
import styled from "styled-components";

const Home = (props) => {
  const posts = [
    {
      title: "Piotr",
      createdAt: "05.11 12:35",
      description:
        "Looking for some to do shopping for me!",
    },
    {
      title: "Damian",
      createdAt: "05.11 12:35",
      description:
        "Need someone to take my pet for a walk.",
    },
    {
      title: "Ania",
      createdAt: "05.11 12:35",
      description:
        "Need help with getting my medicine from the apothecary!",
    },
    {
      title: "Bartek",
      createdAt: "05.11 12:35",
      description:
        "I am looking for someone to deliver a package to my friend.",
    },
  ];

  return (
    <>
      <StyledTypography align="center" color="textPrimary" variant="subtitle1">Help you can give in your neighbourhood!</StyledTypography>
      {posts?.map((post, i) => (
        <Post post={post} key={i} />
      ))}
    </>
  );
};

const StyledTypography = styled(Typography)`
  margin-top: 1rem;
`;

export default Home;
