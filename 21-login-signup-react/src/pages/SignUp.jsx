import React from "react"
import { useState } from "react";
import { useNavigate } from "react-router-dom"

const SignUp = () => {
    const [form, setForm] = useState({ username: '', email: "", password: "", confirmPassword: "" });
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = function (e) {
        e.preventDefault();
        const { username, email, password, confirmPassword } = form

        if (!username, !email, !password, !confirmPassword) return setError('All Fields Are Required !!!')

        const pattern = /\S+@\S+\.\S+/
        const test = pattern.test(email)
        if (!test) return setError("Please Enter Valid Email Address");
        if (password !== confirmPassword) return ("Passwords do not match")

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const exists = users.find((whereareyou) => whereareyou.email === email)
        if (exists) return setError('User Already Exists')

        const newUser = { username, email, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        console.log(users);
        localStorage.setItem('loggedInUser', JSON.stringify(newUser));
        navigate('/');
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <input name="username" placeholder="UserName" onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })} />{"  "}
            <input name="email" type="email" placeholder="Email" onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })} />{"  "}
            <input name="password" type="password" placeholder="Password" onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })} />{"  "}
            <input name="confirmPassword" type="password" placeholder="Confirm Password" onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })} />{"  "}
            <button name="submit" > Sign Up </button>
        </form>
    )
};

export default SignUp;
