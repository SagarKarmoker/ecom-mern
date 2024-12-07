import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";
import { Helmet } from "react-helmet";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    return passwordRegex.test(password);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      const name = formData.get("name");
      const email = formData.get("email");
      const photoUrl = formData.get("photoUrl");
      const password = formData.get("password");

      if (!validatePassword(password)) {
        return toast.warn(
          "Password must contain at least 6 characters, including one uppercase and one lowercase letter.",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          }
        );
      }

      await createUser(email, password);
      toast.success("Signed Up Successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });

      await updateUserProfile(name, photoUrl);

      navigate("/");
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>EquiSports | Join</title>
        <meta name="Register to join" content="EquiSports | Join" />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full border-2 max-w-md bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl  font-semibold text-gray-800 text-center mb-6">
            Create an Account
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            {/* Photo URL */}
            <div>
              <label
                htmlFor="photoUrl"
                className="block text-sm font-medium text-gray-700"
              >
                Photo URL
              </label>
              <input
                id="photoUrl"
                name="photoUrl"
                type="text"
                placeholder="Enter your photo URL"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Must contain at least 6 characters, including one uppercase and
                one lowercase letter.
              </p>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-200"
            >
              Register
            </button>
          </form>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-indigo-500 hover:underline">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
