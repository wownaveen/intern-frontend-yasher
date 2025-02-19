// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const Inputs = ({ title, placeholder, icon , type}) => {
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-gray-500 text-sm">{title}</label>
      <div className="flex items-center relative">
        {icon}
        <input
          type={type}
          placeholder={placeholder}
          className="pl-7 w-full py-2 px-3 border-b focus:outline-none  focus:shadow-[0_1px_0_0_#1f2937]"
        />
      </div>
    </div>
  );
};

export default Inputs;
