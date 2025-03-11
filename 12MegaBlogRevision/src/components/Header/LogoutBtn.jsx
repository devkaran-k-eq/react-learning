import React from "react";
import { useDispatch } from "react-redux";
import appwriteauthservice from "../../appwrite/authService";
import { logout } from "../../store/authSlice";

function LogoutBtn(){
    const dispatch = useDispatch();

    const logoutHandler = () => {
        appwriteauthservice.logout().then( () => {
            dispatch(logout())
        })
    }
    return(
        <button>LogOut</button>
    )
}