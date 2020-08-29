import React from "react";
import { Container, Typography } from "@material-ui/core";
import NavBar from "../NavBar/NavBar";
import Box from "@material-ui/core/Box";
import styled from "styled-components";
import HelpRequest from "./HelpRequest";

const MyHelpRequests = () => {
  const posts = [
    {
      title: "Piotr",
      createdAt: "05.11 12:35",
      description: "Looking for some to do shopping for me!",
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
      <Container maxWidth={"sm"}>
        <StyledTypography>Your help requests</StyledTypography>
        {posts.map((post) => (
          <HelpRequest post={post} />
        ))}
      </Container>
      <Box mb={9} />
      <NavBar />
    </>
  );
};

const StyledTypography = styled(Typography)`
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export default MyHelpRequests;
