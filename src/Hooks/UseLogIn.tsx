import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { UserContext } from "../Context/UserContext";
import { logIn } from "../API/logInRequest";
interface UseLoginReturn {
  email: string;
  password: string;
  name: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setName: (name: string) => void;
  handleRegister: (event: React.FormEvent) => Promise<void>;
  error: string | null;
  passwordConfirmation: string;
  passwordError: string | null;
  setPasswordConfirmation: (passwordConfirmation: string) => void;
  handlelogIn: (event: React.FormEvent) => Promise<void>;
  handleLogout: (event: React.FormEvent) => Promise<void>;
}

const useLogin = (): UseLoginReturn => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { setIsLogedIn, setUser, setIsAdmin, isAdmin } =
    useContext(UserContext);
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string | null>("");

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setPasswordError("");
    console.log(name);

    if (password !== passwordConfirmation) {
      setPasswordError("Please confirm your password.");
      return;
    }
    const response: Promise<any> = logIn(
      email,
      password,
      name,
      setIsLogedIn,
      setError,
      "/LogIn/Register"
    );
    console.log(response);
  };
  const handlelogIn = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setPasswordError("");
    const response: any = await logIn(
      email,
      password,
      name,
      setIsLogedIn,
      setError,
      "/LogIn/auth"
    );
    setUser(response.user);
    console.log(response);
    if (response.token) {
      console.log("hi");
      console.log(response.token);
      Cookies.set("token", response.token);
    }
    // const variable = Cookies.get("token");
    // console.log(variable);
    // Cookies.set("isLoggedIn", JSON.stringify(response));

    if (response.isAdmin) {
      navigate("/");
    } else {
      navigate("/Projects");
    }
  };
  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:5000/LogIn/logout", {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        Cookies.remove("token");
        setIsLogedIn(false);
        setUser();
        navigate("/");
        window.location.reload();
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return {
    email,
    password,
    name,
    setEmail,
    setPassword,
    setName,
    handleRegister,
    error,
    passwordConfirmation,
    setPasswordConfirmation,
    passwordError,
    handlelogIn,
    handleLogout,
  };
};

export default useLogin;
