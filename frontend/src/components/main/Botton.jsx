import React from "react";

const Button = ({ text, onClick }) => (
  <button
    onClick={onClick}
    className="w-full py-2 bg-[#AF6FBF] text-white font-semibold rounded-md hover:opacity-90 transition-all"
  >
    {text}
  </button>
);

export default Button;
