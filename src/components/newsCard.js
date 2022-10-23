import React from 'react';
import image from '../assets/BNNW_AmericanBuffalo--11.jpg';

function NewsCard(props) {
    return (
        <div
            style={{
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "400px",
                width: "600px",
                position: "relative"
            }}
        >
            <div
                style={{
                    backgroundColor: "black",
                    width: "400px",
                    position: "absolute",
                    bottom: "10px",
                    paddingLeft: "1rem"
                }}
            >
                <p
                    style={{
                        color: "white",
                    }}
                >
                    How a sacred tie with Native Americans is restoring bison to indigenous lands
                </p>
            </div>
        </div>
    );
}

export default NewsCard;