import React, { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";

export default function Login() {
    const { user, signInWithGoogle, login } = useContext(AuthContext);
    const [email, setEmail] = useState("");

    if (user) {
        return <Navigate to="/" />;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData(e.target);
            const email = formData.get("email");
            const password = formData.get("password");

            await login(email, password);
        } catch (error) {
            console.error(error);
            toast.error(error.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    };

    return (
        <>
            <Helmet>
                <title>EquiSports | Login</title>
                <meta name="login page" content="EquiSports | Login" />
            </Helmet>
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-white border-2 w-full max-w-md rounded-lg shadow-lg p-6">

                    <h2 className="text-2xl font-bold text-center text-gray-800">
                        Welcome Back!
                    </h2>
                    <p className="text-center text-gray-600 text-sm mt-2">
                        Sign in to your account to continue.
                    </p>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                        <div className="form-control">
                            <label className="label text-gray-700">
                                Email Address
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                className="input input-bordered w-full border-gray-300 focus:ring focus:ring-indigo-200 rounded-md"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label text-gray-700">
                                Password
                            </label>
                            <input
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                                className="input input-bordered w-full border-gray-300 focus:ring focus:ring-indigo-200 rounded-md"
                                required
                            />
                            <div className="text-right mt-1">
                                <Link
                                    to={`/forgot-password/?email=${encodeURIComponent(email)}`} 
                                    className="text-sm text-indigo-500 hover:underline"
                                >
                                    Forgot Password?
                                </Link>
                            </div>
                        </div>
                        <button className="btn btn-primary w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200">
                            Login
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="divider text-gray-400 mt-6">OR</div>

                    {/* Google Login */}
                    <button
                        onClick={signInWithGoogle}
                        className="flex items-center justify-center w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
                    >
                        <FaGoogle className="mr-2" /> Login with Google
                    </button>

                    {/* Register Link */}
                    <p className="text-center text-sm text-gray-600 mt-6">
                        Don’t have an account?{" "}
                        <Link
                            to="/register"
                            className="text-indigo-500 hover:underline"
                        >
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}
