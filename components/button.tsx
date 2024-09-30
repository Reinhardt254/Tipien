import React from "react";


interface ButtonProps {
   value: string;
 }

 const Button: React.FC<ButtonProps> = ({ value }) => {
  return (
    <button className="text-xl text-center bg-green-700 text-white rounded-full px-5 py-3 max-sm:py-2 max-sm:px-4 max-sm:text-lg hover:bg-white hover:text-green-700 border-2 border-green-700">
      {value}
    </button>
  );
};

export default Button;
