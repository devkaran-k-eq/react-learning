import React from "react"
import { useState } from "react";
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [form, setForm] = useState({ email: '', password: '' })
    const [error, setError] = useState("")
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        const { email, password } = form;

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(u => u.email === email && u.password === password)
        console.log(user, "User In Login");
        if (!user) return setError("Invalid Credentials")
        localStorage.setItem('loggedInUsers', JSON.stringify(user))
        navigate()
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}{"  "}
            <input name="email" type="email" placeholder="Email" onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })} /> {"  "}
            <input name="password" type="password" placeholder="Password" onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })} />{"  "}
            <button type="submit">Login</button>
        </form>
    )
};

export default Login;
