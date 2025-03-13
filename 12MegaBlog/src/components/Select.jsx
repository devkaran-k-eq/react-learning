import React from "react";
import { useId } from "react";

const Select = ({ label, className, options, ...props }, ref) => {
  const id = useId();

  return (
    <div className="w-full">
      {label && <label htmlFor={id}>{label}</label>}

      <select
        id={id}
        {...props}
        className={`px-3 py-2 bg-white text-black outline-none rounded-lg focus:bg-gray-50 border border-gray-200 w-full ${className}`}
        ref={ref}
      >
        {
          // chain operator
          options?.map((option) => {
            <option value={option} key={option}>
              {option}
            </option>
          })
        }
      </select>
    </div>
  );
};

export default React.forwardRef(Select)
