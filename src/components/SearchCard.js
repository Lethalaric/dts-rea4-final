import React from 'react';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

function SearchCard({title, image}) {
    return (
        <Card>
            <div style={{ position: "relative" }}>
                <CardMedia 
                    style={{ height: "250px", }}
                    component="img"
                    image={image}
                    title="Pancakes"
                    alt="Pancakes"
                /> 
                <div style={{
                    position: "absolute",
                    bottom: "1rem",
                    paddingLeft: "1rem"
                }}> 
                    <mark style={{ backgroundColor: 'black',
  color: 'white' }}>{title}</mark>
                </div>
            </div>
        </Card>
    );
}

export default SearchCard;