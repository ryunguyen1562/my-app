import React from 'react';
const Footer = (props) => {
    const footerStyle = {
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        background: "linear-gradient(to left, red, yellow)"
    };
    return (
        <div style={footerStyle}>
            <h1>Day la Footer</h1>
        </div>
    );
};

export default Footer;