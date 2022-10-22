import React from 'react';
import {CircularProgress, Container, Typography} from "@mui/material";
import image from '../assets/BNNW_AmericanBuffalo--11.jpg';
import {useGetAllNewsQuery} from "../stores/Features/apiSlice";
import {Link} from 'react-router-dom'

function HomepageHeader(props) {
    const {
        data: allNews,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetAllNewsQuery()

    let content

    if (isLoading) {
        content = <CircularProgress text="Loading..." />
    } else if (isSuccess) {
        // content = posts.map(post => <PostExcerpt key={post.id} post={post} />)
        console.log(allNews.data[0])
        content = container(allNews.data[0])
    } else if (isError) {
        content = <div>{error.toString()}</div>
    }

    return (
        <>
            {content}
        </>
    );
}

const container = (news) => {
    return <Container
        maxWidth={false}
        sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "900px",
            alignItems: "center",
            backgroundImage: `url(${news.image_url})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}
    >
        <div
            style={{
                maxWidth: "1000px"
            }}
        >
            <Typography>TODAY's BEUTIFUL NEWS</Typography>
            <Link to={`/news/${news.uuid}`}>
                <Typography variant={"h2"}>{news.title}</Typography>
            </Link>
            <div
                style={{
                    display: "flex"
                }}
            >
                {news.categories.map(value => {
                    console.log(value)
                    return (
                        <Typography
                            sx={{
                                textTransform: "uppercase",
                                marginRight: "0.5rem"
                            }}
                        >
                            {value}
                        </Typography>
                    )
                })}
                {/*<Typography*/}
                {/*    sx={{*/}
                {/*        textTransform: "uppercase"*/}
                {/*    }}*/}
                {/*>*/}
                {/*    {news.categories[0]}*/}
                {/*</Typography>*/}
            </div>
            <button>Play Button</button>
        </div>
        <div
            style={{
                alignSelf: "end"
            }}
        >
            <button>submit your story</button>
        </div>
    </Container>
}

export default HomepageHeader;