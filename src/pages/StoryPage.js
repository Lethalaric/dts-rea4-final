import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import StoryCard from "../components/StoryCard";
import {useSelector} from "react-redux";

export default function StoryPage() {
    const storyDatas = useSelector(state => state.story)
  return (
      <Container maxWidth='xl'>
        <Box
          sx={{
            pt: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
        <Typography component="h1" variant="h3">
            Story Page
        </Typography>
        {(storyDatas.length === 0) ? <Typography>No story available</Typography> : storyDatas.map(story => <StoryCard story={story} />)}
      </Box>
      </Container>
  );
}