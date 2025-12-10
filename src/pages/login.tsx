import { useState } from "react";
// import instagram from "../assets/instagram.png";
import sideImg from "../assets/landing-2x.png";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email, "Password:", password);
    navigate("/home");
  };

  return (

    <div className="min-h-screen flex items-center justify-center loginbackground">
      <div className="hidden md:block">
        <img src={sideImg} alt="Landing page illustration" />
      </div>
      <div className="flex flex-col items-center w-full max-w-md p-6 space-y-4 bg-black border border-black rounded-lg shadow-md">
        {/* Logo */}{" "}
        <h1 className="text-4xl font-bold text-white mb-6">Instagram</h1>
        {/* Login Form */}
        <form
          className="w-full flex flex-col space-y-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Phone number, username or email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#FAFAFA] w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#FAFAFA] w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors"
          >
            Log In
          </button>
        </form>
        {/* Forgot password */}
        <div className="text-sm text-gray-500">
          <a href="#" className="hover:underline">
            Forgot password?
          </a>
        </div>
        {/* Separator */}
        <div className="flex items-center w-full my-4">
          <hr className="flex-1 border-gray-300" />
          <span className="mx-2 text-gray-400 text-sm">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>
        {/* Login with Facebook */}
        <div className="flex items-center justify-center text-gray-600 font-semibold">
          Don’t have an account?
          <a href="/signup" className="mx-2 text-blue-900 font-semibold hover:underline">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
