import React from 'react';
import HomepageHeader from "../components/homepageHeader";
import NewsCard from "../components/newsCard";

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

            <div>
                <h4>Places</h4>
                <NewsCard/>
            </div>
            <div>
                <h4>People</h4>
                <NewsCard/>
            </div>
            Home Page
        </div>
    );
}

export default Homepage;