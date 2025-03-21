import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { login as authlogin } from "../store/authSlice";
import authService from "../appwrite/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Input, Logo, Button } from "./index";

function Login() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      console.log("-login----session----", session, data);

      if (session) {
        const userData = await authService.getCurrentUser();
        console.log("-login----userData----", userData, session);

        if (userData) {
          dispatch(authlogin({ userData }));
          console.log("Redux state after login:", store.getState()); // Debug Redux state
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
      console.log("error in login", error);
      
    }
  };
  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              label="Passwords: "
              type="password"
              placeholder="Enter Your Password"
              {...register("password", {
                required: true,
              })}
            />

            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
