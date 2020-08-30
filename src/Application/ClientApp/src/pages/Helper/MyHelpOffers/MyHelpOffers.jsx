import { Grid, Typography } from "@material-ui/core";
import HelpOffer from "./HelpOffer";
import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../NavBar/NavBar";
import routes from "../../../routes";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import styled from "styled-components";

const MyHelpOffers = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${routes.api.requests}?accepted=true`);
      console.log(result.data.results);
      setPosts(result.data.results);
    };

    fetchData();
  }, []);

  return (
    <>
      <Container maxWidth={"sm"}>
        <StyledTypography color="textPrimary" variant="h6">
          These are my help offers
        </StyledTypography>
      </Container>
      {posts.length ? (
        posts.map((post, i) => <HelpOffer post={post} key={i} />)
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
      <NavBar />
    </>
  );
};

const StyledTypography = styled(Typography)`
  margin-top: 1rem;
`;

export default MyHelpOffers;
