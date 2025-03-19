import React, { useId } from "react";

const Input = React.forwardRef(
  ({ label, className = "", type = "text", ...props }, ref) => {
    const id = useId();

    return (
      <div className="w-full">
        {label && (
          <label className="inline-block mb-1 pl-1" htmlFor={props.id}>
            {label}
          </label>
        )}
        <input
          
          type={type || "text"}
          className={`px-3 py-2 rounded-lg text-black bg-white outline-none  focus:bg-gray-100 hover:bg-gray-50 w-full ${className}`}
          ref={ref}
          id={id}
          {...props}
        />
      </div>
    );
  }
);

export default Input;
