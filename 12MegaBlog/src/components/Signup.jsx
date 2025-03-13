import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo, Input } from "./index";
import { login } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useState } from "react";
import authService from "../appwrite/auth";

function SignUp() {
  const [error, setError] = useState("");
  const [register, handleSubmit] = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const create = async (data) => {
    setError("");
    try {
      const session = await authService.createAccount(data);

      if (session) {
        const userData = await authService.getCurrentUser();

        if (userData) dispatch(login(userData));
      }
    } catch (error) {
      setError(error.message);
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
            Sign In
          </Link>
        </p>

        {error && <p className="text-red-500 mt-8 text-center">{error}</p>}

        <form action={handleSubmit(create)}>
          <div className="space-y-5">
            <Input
              label="Full Name: "
              placeholder="Enter Your Full Name"
              {...register("name", {
                required: true,
              })}
            />

            <Input
              label="email"
              type="email"
              placeholder="Enter Your Email"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
                      value
                    ) || "Enter Valid email address",
                },
              })}
            />

            <Input
              label="password"
              placeholder="Enter Your Password"
              {...register("password", {
                required: true,
              })}
            />

            <button type="submit" className="w-full">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
