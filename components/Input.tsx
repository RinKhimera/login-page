import React from "react";

interface InputProps {
  id: string;
  onChange: any;
  value: string;
  type?: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({
  id,
  onChange,
  value,
  placeholder,
  type,
}) => {
  return (
    <div className="relative">
      <input
        onChange={onChange}
        value={value}
        type={type}
        id={id}
        placeholder={placeholder}
        className="
        block
        px-2
        py-2
        w-full
        text-md
        border-b-2
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
        "
      />
    </div>
  );
};

export default Input;
