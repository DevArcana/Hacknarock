import React, { useEffect, useState } from "react";
import axios from "axios";

import { Grid, Typography } from "@material-ui/core";
import Post from "./Post";
import styled from "styled-components";
import Box from "@material-ui/core/Box";
import NavBar from "../NavBar/NavBar";
import Container from "@material-ui/core/Container";

export const Home = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("/api/rest/requests");

      console.log(result.data.results);
      setPosts(result.data.results);
    };

    fetchData();
  }, []);

  return (
    <>
      <Container maxWidth={"sm"}>
        <StyledTypography color="textPrimary" variant="h6">
          Help you can give in your neighbourhood!
        </StyledTypography>
      </Container>
      {posts.length ? (
        posts.map((post, i) => <Post post={post} key={i} />)
      ) : (
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item>
            <img
              alt="logo"
              style={{
                height: `16rem`,
                width: `16rem`,
              }}
              src={require("../../../assets/undraw_void_3ggu.png")}
            />
          </Grid>
          <Typography>No results found</Typography>
          <Box mb={16} />
        </Grid>
      )}
      <Box mb={9} />
      <NavBar />
    </>
  );
};

const StyledTypography = styled(Typography)`
  margin-top: 1rem;
`;
