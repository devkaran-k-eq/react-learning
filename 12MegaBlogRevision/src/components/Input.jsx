import React, { useId } from "react";

const Input = React.forwardRef(
  ({ label, className = "", type = "text", ...props }, ref) => {
    const id = useId();

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={props.id} className="inline-block mb-1 pl-1">
            {id}
          </label>
        )}

        <input
          type="text"
          className={`px-3 py-4 rounded-lg bg-white outline-none focus:bg-gray-100 hover:bg-gray-50 w-full ${className}`}
          ref={ref}
          {...props}
          id={id}
        />
      </div>
    );
  }
);

export default Input;
