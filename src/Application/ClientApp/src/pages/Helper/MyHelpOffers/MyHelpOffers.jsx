import { Grid, Typography } from "@material-ui/core";
import HelpOffer from "./HelpOffer";
import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../NavBar/NavBar";
import routes from "../../../routes";
import Box from "@material-ui/core/Box";

const MyHelpOffers = () => {
  // const posts = [
  //   {
  //     title: "request1",
  //     createdAt: "05.11 12:35",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  //   },
  //   {
  //     title: "request2",
  //     createdAt: "05.11 12:35",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  //   },
  //   {
  //     title: "request3",
  //     createdAt: "05.11 12:35",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  //   },
  //   {
  //     title: "request4",
  //     createdAt: "05.11 12:35",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  //   },
  // ];

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
      <Typography>These are my help offers.</Typography>
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

export default MyHelpOffers;
