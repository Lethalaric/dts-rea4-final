import * as React from 'react';
import { useSelector } from 'react-redux';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import SearchCard from "../components/SearchCard";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function SearchresultPage() {
  const keyword = useSelector(state => state.keyword);
  // console.log("keyword", keyword);

  return (
    <Container sx={{ py: 8 }} maxWidth="xl">
      <Typography variant="h6" noWrap>
        10 result for "{keyword.keyword}"
      </Typography>
      {/* End hero unit */}
      <Grid container spacing={4} sx={{ pt: 4 }} >
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <SearchCard />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}