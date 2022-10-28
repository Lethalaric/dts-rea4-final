import React from 'react';
import NewsHeader from "../components/newsHeader";
import SideNews from "../components/sideNews";
import NewsContent from "../components/newsContent";
import NewsCard from "../components/newsCard";

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function NewsPage(props) {
    return (
        <Container maxWidth='xl'>
            <Box sx={{ display: "flex" }}>
                <NewsHeader />
                <SideNews />
            </Box>
            <NewsContent/>
            <Typography variant="h4" sx={{ pt : 7 }}>Related Categories</Typography>
            <NewsCard categories={"tech"} />
        </Container>
    );
}

export default NewsPage;