import { useState } from "react";
const Login = () => {
    const [message, setMessage] = useState('Xin chao cac ban')
    return (
        <div>
            <h1>{message}</h1>
            <button onClick={() => setMessage('Ban da dang nhap thanh cong')}>Dang nhap</button>
        </div>
    )
}

export default Login 