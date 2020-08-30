import { Container, Grid, Typography } from "@material-ui/core";
import NavBar from "../NavBar/NavBar";
import Box from "@material-ui/core/Box";
import styled from "styled-components";
import HelpRequest from "./HelpRequest";
import React, { useEffect, useState } from "react";
import axios from "axios";
import routes from "../../../routes";

const MyHelpRequests = () => {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${routes.api.requests}?me=true`);
      console.log(result.data.results);
      setPosts(result.data.results);
    };

    fetchData();
  }, []);

  return (
    <>
      <Container maxWidth={"sm"}>
        <StyledTypography variant={"h6"}>Your help requests</StyledTypography>

        {posts.length ? (
          posts.map((post, i) => <HelpRequest post={post} key={i} />)
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
