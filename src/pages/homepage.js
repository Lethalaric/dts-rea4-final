import React from 'react';
import HomepageHeader from "../components/homepageHeader";
import NewsCard from "../components/newsCard";
import ReframingTheWorld from "../sections/reframingTheWorld";
import Subscription from "../sections/subscription";
import Quotes from "../sections/quotes";

function Homepage(props) {
    return (
        <div>
            <HomepageHeader />
            <div>
                <h4>This Week's Stories</h4>
                <NewsCard/>
            </div>
            <div>
                <h4>Most Popular Stories</h4>
                <NewsCard/>
            </div>
            <div>
                <h4>Natural World</h4>
                <NewsCard/>
            </div>
            {/*<div>*/}
            {/*    <ReframingTheWorld />*/}
            {/*</div>*/}
            <div>
                <h4>Places</h4>
                <NewsCard/>
            </div>
            <div>
                <h4>People</h4>
                <NewsCard/>
            </div>
            <div>
                <Subscription />
            </div>
            <div>
                <Quotes />
            </div>
            Home Page
        </div>
    );
}

export default Homepage;