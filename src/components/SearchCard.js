import React from 'react';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';

function SearchCard({title, image}) {
    return (
        <Card>
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
        </Card>
    );
}

export default SearchCard;