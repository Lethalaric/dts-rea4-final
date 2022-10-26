import React, {useEffect, useState} from 'react';
import HomepageHeader from "../components/homepageHeader";
import NewsCard from "../components/newsCard";
import Subscription from "../sections/subscription";
import Quotes from "../sections/quotes";

function Homepage(props) {
    return (
        <div>
            <HomepageHeader />
            <div>
                <h4>Tech Stories</h4>
                <NewsCard categories={"tech"}/>
            </div>
            <div>
                <h4>Politics Stories</h4>
                <NewsCard categories={"politics"}/>
            </div>
            <div>
                <h4>Business Stories</h4>
                <NewsCard categories={"business"}/>
            </div>
            <div>
                <h4>Travel Stories</h4>
                <NewsCard categories={"travel"}/>
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