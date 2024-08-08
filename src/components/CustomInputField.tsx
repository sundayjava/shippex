import React, { useState } from "react";
import { GoPeople } from "react-icons/go";
import { FiLock } from "react-icons/fi";
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";

interface TextFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  label: string;
  placeholder?: string;
  isPassword: boolean;
  inputName: any;
}

export const CustomInputField: React.FC<TextFieldProps> = ({
  value,
  onChange,
  type = "text",
  label,
  placeholder,
  isPassword,
  inputName
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="w-[342px] mt-5">
      <div
        className={`w-full my-2 ${isPassword ? "flex justify-between" : ""}`}
      >
        <span className="text-[14px] text-[#1F2937] w-6/12 font-medium text-start">
          {label}
        </span>
        {isPassword ? (
          <span className="text-[14px] w-6/12 text-end font-medium text-shipping-secondary">
            Forgot password?
          </span>
        ) : (
          ""
        )}
      </div>
      <div className="py-3 px-2 flex gap-3 items-center border border-shipping-[#E5E7EB] rounded-lg input-style hover:border-shipping-primary outline-1">
        {isPassword ? (
          <FiLock className="w-[14px] h-[14px] text-[#6B7280]" />
        ) : (
          <GoPeople className="w-[14px] h-[14px] text-[#6B7280]" />
        )}
        <input
          value={value}
          onChange={onChange}
          type={isPassword && !showPassword ? "password" : type}
          placeholder={placeholder}
          name={inputName}
          className={`text-[15px] font-medium border-none outline-none ${
            isPassword ? "w-4/5" : ""
          } bg-transparent`}
        />
        {isPassword ? (
          <div
            className="hover:cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <MdOutlineVisibility className="w-[18px] h-[18px] text-[#6B7280]" />
            ) : (
              <MdOutlineVisibilityOff className="w-[18px] h-[18px] text-[#6B7280]" />
            )}
          </div>
        ) : (
          ""
        )}
      </div>
      <p className="italic text-[12px] text-red-400 font-medium px-2"></p>
    </div>
  );
};
