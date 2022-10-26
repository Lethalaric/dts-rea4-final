import React from 'react';
import HomepageHeader from "../components/homepageHeader";
import NewsCard from "../components/newsCard";
// import Subscription from "../sections/subscription";
import Quotes from "../sections/quotes";

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Homepage(props) {
    return (
        <div>
            <HomepageHeader />
            <Container maxWidth='xl' sx={{ mt : 7 }}>
                <Typography variant="h4">Tech Stories</Typography>
                <NewsCard categories={"tech"} sx={{ mt : 2 }}/>
            </Container>
            <Container maxWidth='xl' sx={{ mt : 7 }}>
                <Typography variant="h4">Politics Stories</Typography>
                <NewsCard categories={"politics"} sx={{ mt : 2 }}/>
            </Container>
            <Container maxWidth='xl' sx={{ mt : 7 }}>
                <Typography variant="h4">Business Stories</Typography>
                <NewsCard categories={"business"} sx={{ mt : 2 }}/>
            </Container>
            <Container maxWidth='xl' sx={{ mt : 7 }}>
                <Typography variant="h4">Food Stories</Typography>
                <NewsCard categories={"food"} sx={{ mt : 2 }}/>
            </Container>
            <Container maxWidth='xl' sx={{ mt : 7 }}>
                <Typography variant="h4">Entertainment Stories</Typography>
                <NewsCard categories={"entertainment"} sx={{ mt : 2 }}/>
            </Container>
            {/* <Box sx={{ mt : 7 }}><Subscription /></Box> */}
            <Box sx={{ mt : 7 }}>
                <Quotes />
            </Box>
        </div>
    );
}

export default Homepage;