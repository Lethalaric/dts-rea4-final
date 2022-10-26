import React, {useEffect, useState} from 'react';
import HomepageHeader from "../components/homepageHeader";
import NewsCard from "../components/newsCard";
import Subscription from "../sections/subscription";
import Quotes from "../sections/quotes";

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Homepage(props) {
    return (
        <div>
            <HomepageHeader />
            <Container maxWidth='xl'>
                <Typography variant="h4">Tech Stories</Typography>
                <NewsCard categories={"tech"} sx={{ pt : '10px' }}/>
            </Container>
            <div>
                <h4>Politics Stories</h4>
                <NewsCard categories={"politics"}/>
            </div>
            <div>
                <h4>Business Stories</h4>
                <NewsCard categories={"business"}/>
            </div>
            <div>
                <h4>Entertainment Stories</h4>
                <NewsCard categories={"entertainment"}/>
            </div>
            <div>
                <h4>Food Stories</h4>
                <NewsCard categories={"food"}/>
            </div>
            <Subscription />
            <div>
                <Quotes />
            </div>
        </div>
    );
}

export default Homepage;