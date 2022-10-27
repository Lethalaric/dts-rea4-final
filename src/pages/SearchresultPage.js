import * as React from 'react';
import { useSelector } from 'react-redux';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import SearchCard from "../components/SearchCard";
import {useGetAllNewsByCategoriesQuery} from "../stores/Features/api/apiSlice";
import {Button, CircularProgress} from "@mui/material";
import {useEffect, useState} from "react";

export default function SearchresultPage() {
    const keyword = useSelector(state => state.keyword.keyword);
    const [page, setPage] = useState(1)
    const {
        data: allNewsByKeyword,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetAllNewsByCategoriesQuery({search: keyword, page: page})
    if (isSuccess) {
        return (
            <Container sx={{ pt: 2 }} maxWidth="xl">
                <Typography variant="h6" noWrap>
                    Found total {allNewsByKeyword.meta.found} news for "{keyword}"
                </Typography>
                <Box sx={{ pt : 2 }}>
                    <Button variant={"outlined"} onClick={() => setPage((page===1) ? 1 : page-1)} sx={{marginRight: "1rem", color: "white"}}>Previous Page</Button>
                    <Button variant={"outlined"} onClick={() => setPage(page+1)} sx={{color: "white"}}>Next Page</Button>
                </Box>
                <Grid container spacing={2} sx={{ pt: 4 }} >
                    {allNewsByKeyword.data.map(news => {
                        return(
                            <Grid item key={news.uuid} xs={2} sm={6} md={4}>
                                <SearchCard image={news.image_url} title={news.title} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        );

    }
}