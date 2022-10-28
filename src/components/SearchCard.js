import React from 'react';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import {Link} from "react-router-dom";

function SearchCard({title, image, uuid}) {
    return (
        <Card>
            <Link to={`/news/${uuid}`}>
                <Box sx={{ position: "relative" }}>
                    <CardMedia
                        style={{ height: "250px", }}
                        component="img"
                        image={image}
                    />
                    <Box
                        sx={{
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            p : '10px',
                            position: "absolute",
                            bottom: 0,
                            color : 'bisque'
                        }}
                    >
                        {title}
                    </Box>
                </Box>
            </Link>
        </Card>
    );
}

export default SearchCard;