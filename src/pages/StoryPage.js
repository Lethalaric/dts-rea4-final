import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import StoryCard from "../components/StoryCard";

export default function StotyForn() {
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
          <StoryCard />
          <StoryCard />
      </Box>
      </Container>
  );
}