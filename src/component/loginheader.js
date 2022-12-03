import { useState } from "react";
const LoginHeader = () => {
    const headerStyle = {
        overflow: "hidden",
        background: "linear-gradient(to left, red, yellow)",
        display: "flex",
        justifyContent: "space-between"
    };
    const [message, setMessage] = useState('Xin chao cac ban')
    return (
        <div style={headerStyle}>
            <h1>{message}</h1>
            <button onClick={() => setMessage('Ban da dang nhap thanh cong')}>Dang nhap</button>
        </div>
    );
};

export default LoginHeader; 