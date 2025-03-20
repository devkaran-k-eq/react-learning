import React from "react";
import { logout } from "../../store/authSlice";
import authService from "../../appwrite/auth";
import { useDispatch } from "react-redux";
import {Logo} from "../../components/"
import { useNavigate } from "react-router-dom";

export default function LogoutBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
      navigate("/signup")
    });
  };
  return (
    <button className="inline-block px-6 py-2 duration-200 hover:bg-blue-200 rounded-full font-bold" onClick={logoutHandler}>
      LogOut
    </button>
  );
}
