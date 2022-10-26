import React from 'react';
import NewsHeader from "../components/newsHeader";
import SideNews from "../components/sideNews";
import NewsContent from "../components/newsContent";
import NewsCard from "../components/newsCard";

function NewsPage(props) {
    return (
        <div>
            <div
                style={{
                    display: "flex"
                }}
            >
                <NewsHeader />
                <SideNews />
            </div>
            <div>
                <NewsContent/>
            </div>
            <div>
                <p>Related Categories</p>
                <NewsCard />
            </div>
        </div>
    );
}

export default NewsPage;