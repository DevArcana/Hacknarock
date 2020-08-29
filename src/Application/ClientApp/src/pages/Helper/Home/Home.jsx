import React, { useEffect, useState } from "react";
import axios from "axios";

import { Typography } from "@material-ui/core";
import Post from "./Post";
import styled from "styled-components";
import Box from "@material-ui/core/Box";
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "../NavBar/NavBar";

export const Home = (props) => {
  ///const [posts, setPosts] = useState([
  //   {
  //     title: "Piotr",
  //     createdAt: "05.11 12:35",
  //     description:
  //       "Looking for some to do shopping for me!",
  //   {
  //     title: "Bartek",
  //     createdAt: "05.11 12:35",
  //     description:
  //       "I am looking for someone to deliver a package to my friend.",
  //   },
  // ];

  const [posts, setPosts] = useState([]);
  const { getAccessTokenWithPopup } = useAuth0();

  useEffect(() => {
    const fetchData = async () => {
      const token = await getAccessTokenWithPopup({
        audience: "http://devmountain-hacknarock.herokuapp.com/api/",
      });
      const result = await axios("/api/rest/requests", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(result.data.results);
      setPosts(result.data.results);
    };

    fetchData();
  }, []);

  return (
    <>
      <StyledTypography align="center" color="textPrimary" variant="subtitle1">
        Help you can give in your neighbourhood!
      </StyledTypography>
      {posts?.map((post, i) => (
        <Post post={post} key={i} />
      ))}
      <Box mb={9} />
      <NavBar />
    </>
  );
};

const StyledTypography = styled(Typography)`
  margin-top: 1rem;
`;
