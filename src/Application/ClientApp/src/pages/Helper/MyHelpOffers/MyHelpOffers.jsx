import { Typography } from "@material-ui/core";
import HelpOffer from './HelpOffer';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import BottomNav from "../../../components/BottomNav/BottomNav";



const MyHelpOffers = (props) => {
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

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://devmountain-hacknarock.herokuapp.com/api/rest/requests?accepted=true',
      );
      console.log(result.data.results)
      setPosts(result.data.results);
    };
 
    fetchData();
  }, []);

  return (
    <>
      <Typography>These are my help offers.</Typography>
      {posts?.map((post, i) => (
        <HelpOffer post={post} key={i} />
      ))}
      <BottomNav />

    </>
  );
}

export default MyHelpOffers;
