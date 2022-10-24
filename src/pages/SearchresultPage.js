import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import NewsCard from "../components/newsCard";
import SearchCard from "../components/SearchCard";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function SearchresultPage() {
  return (
    <Container sx={{ py: 8 }} maxWidth="xl">
      <Typography variant="h6" noWrap>
        10 result for "keyword"
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