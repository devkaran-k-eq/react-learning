import React from "react";


const Button = ({
    children,
    className="",
    textColor = "text-white",
    bgColor = "bg-blue-600",
    type = "button",
    ...props

}) => {


    return(
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}  {...props}>
                {children}
        </button>
    )
}

export default Button