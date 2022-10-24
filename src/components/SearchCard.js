import React from 'react';
import image from '../assets/BNNW_AmericanBuffalo--11.jpg';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

function SimpleCard(props) {
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
  color: 'white' }}>Some text fdflkjasdfla lkfj aslkdfjasf aslfjas flkjsaflkajsf fasklfdasl fdja;sldfkja ajfa;skfdl</mark>
                </div>
            </div>
        </Card>
    );
}

export default SimpleCard;