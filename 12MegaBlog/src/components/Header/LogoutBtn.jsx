import React from "react";
import { logout } from "../../store/authSlice";
import authService from "../../appwrite/auth";
import { useDispatch } from "react-redux";

export default function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return <button>LogOut</button>;
}
