import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { CustomInputField } from "../components/CustomInputField";
import CircularProgress from "@mui/material/CircularProgress";
import { login } from "../api/login";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "../contexts/SnackbarContext";

function Login() {
  const navigation = useNavigate();
  const { showSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [user, setUser] = useState({
    username: "",
    pwd: "",
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCheckboxChange = (event: { target: { checked: any } }) => {
    const isChecked = event.target.checked;
    setIsChecked(isChecked);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setLoading(true);

    if (!emailRegex.test(user.username) || user.username.length <= 5) {
      showSnackbar("Invalid email", false);
      setLoading(false);
      return;
    }

    if (user.pwd.length < 5) {
      showSnackbar("Password cannot be less than 5", false);
      setLoading(false);
      return;
    }

    try {
      const result = await login(user.username, user.pwd);
      showSnackbar(`Welcome ${result.full_name}`, true);

      await delay(1200);

      navigation(result.home_page);
    } catch (error) {
      showSnackbar(`Login ${error}`, false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`fade-in min-h-screen flex flex-col items-center relative w-full ${
        isVisible ? "fade-in-active" : ""
      }`}
    >
      <div className="absolute top-[48px] left-[48px]">
        <img src={logo} alt="Platform logo" />
      </div>

      <div className="flex-grow flex items-center justify-center">
        <form onSubmit={submit} className="w-[100%]">
          <h1 className="text-[24px] leading-[32px] font-bold text-center">
            Sign in
          </h1>
          <p className="font-[300] text-[14px] text-[#4B5563] leading-5 flex gap-1 justify-center items-center mt-2">
            Don't have an account yet?{" "}
            <span className="text-shipping-secondary font-semibold">
              Sign up here
            </span>
          </p>
          <CustomInputField
            type="text"
            placeholder="your email"
            label="Username"
            isPassword={false}
            inputName="username"
            value={user.username}
            onChange={handleInputChange}
          />
          <CustomInputField
            type="text"
            placeholder="your password"
            label="Password"
            isPassword={true}
            inputName="pwd"
            value={user.pwd}
            onChange={handleInputChange}
          />

          <div className="flex items-center my-5">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="custom-checkbox"
            />{" "}
            <span className="text-[17px] font-medium text-[#1F2937] text-start ml-5">
              Remember me
            </span>
          </div>
          {loading ? (
            <button className="text-[15px] flex justify-center items-center gap-3 font-semibold bg-shipping-secondary w-full text-shipping-accent py-3 rounded-lg mt-2">
              <CircularProgress
                size={16}
                sx={{
                  color: "#EFF6FF",
                }}
              />
              Signing in
            </button>
          ) : (
            <button
              className={`text-[15px] font-semibold ${
                !isChecked ? "bg-shipping-primary" : "bg-shipping-secondary"
              } w-full text-shipping-accent py-3 rounded-lg mt-2 hover:bg-shipping-secondary`}
            >
              Sign in
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;
